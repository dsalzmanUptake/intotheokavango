Okavango
========

Data down the delta


#### Installation

requires Python >=3.4
requires housepy (https://github.com/brianhouse/housepy)

    sudo pip-3.4 install -r requirements.txt


##### The server

###### Login
    ./scripts/login.sh    

###### ntp
yo, make sure the server is on top of the time:

    tzselect
    sudo apt-get install ntp

Check it: `sudo ntpq -p`    

###### nginx
    sudo service nginx start
Can use this to show syntax errors in /etc/nginx.conf: `sudo nginx -c /etc/nginx/nginx.conf`

###### mongo
http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/
data at /mnt/data
    `sudo chown mongodb /mnt/data`
    `sudo nano /etc/mongod.conf`
    `sudo service mongo start`
cat /var/log/mongodb/mongod.log

###### Running
Mongo, nginx, and monit should be configured -- see .smp files. Then: `sudo ./scripts/start.sh`

###### Checking processes
    ps aux | grep python    # should show main.py
    ps aux | grep mongo
    ps aux | grep nginx

Monit is used to keep main.py up and running. Check its status: `sudo monit status`

###### Check disk space
    sudo df -h

###### Check current memory usage
    top; m

###### Check reasons for killed processes
    dmesg
http://stackoverflow.com/questions/13890789/convert-dmesg-timestamp-to-custom-date-format

###### Look at file sizes
    sudo du -ah


#### Usage

##### Adding static pages
Simply add a template with the desired page name. eg, `/example` will automatically point to `example.html` 
note that all templates should inherit from page.html.

##### Ingesting data
Post that data to `/ingest/<FeatureType>`.
Alternately, post it to `/ingest` if it has a `FeatureType` property inside of it. 
A module with a corresponding name will be loaded (hopefully) to process it.

##### Adding a new feature ingestion endpoint
Add a python module in the `ingest` folder with the name of the endpoint. eg, `/ingest/rhino` will load the module `rhino.py`. The module should contain a single function, `ingest(request)` which receives tornado request variables and which returns either GeoJSON or a flat dictionary with feature attributes.
- `t_utc` must be provided - a UNIX timestamp in UTC
- `Expedition`, `t_created`, and `FeatureType` are added automatically.
- coordinates are automatically formated, so they may be specified in individual fields (eg, latitude, longitude)
See in-module comments for more information (ingest/__init__.py)

##### Calling the api
Basically, it's like this: `/api/<view>/<output>?<query>`

The view is what kind of thing you want back (eg, a FeatureCollection (features), or a list of expeditions)  
The output is json if it's missing, otherwise, how about a map? or HTML? a chart?  
See templates/api/map.html for an example of how to subsequently load the JSON data asyncronously  

The query defines the filter. This might be any property at all, but keyed ones are:
- Expedition (eg okavango_14)
- Member (eg Jer)
- startDate and endDate (endDate is one day later if omitted and startDate is present)
- geoBounds (upper left (NW), lower right (SE): lon_1,lat_1,lon_2,lat_2. So Okavango is something like 20,-17,26,-22

By default, returns the first 100 results. results=N for more.

##### Adding a new api endpoint
Add a python module in the `api` folder with the name of the endpoint. eg, `/api/lion` will load the module `lion.py`. The module should contain a single function, `assemble(tornado.Handler, search)` which receives a server Handler and an assembled Mongo search document, and which returns an HTTP response.

##### Adding a new api output format
Add an html document in the `templates/api` folder, like `map.html`, but not that one, it's already there.

##### Advantage to dynamic loading of ingest and api modules
If they are bad, they won't crash the system


#### Note about recent versions
This code relies on pymongo 3.0b, which has more concise collection queries  

mongo 3.1.0 supports altitude in the geojson fields (literally 6 days ago) -- current release version is 3.0.0  
We want this, so at the moment we are not supporting altitude, but upgrade that before launch so we don't lose that data  


#### Copyright/License

Copyright (c) 2015 Brian House and The Office for Creative Research

This code is released under the MIT License and is completely free to use for any purpose. See the LICENSE file for details.
