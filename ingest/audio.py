import soundcloud, time, json
from tornado import gen, web
from housepy import log, util, config
from ingest import save_files

"""Expecting JSON or form metadata with Member and a timestamp in UTC"""

settings = config['soundcloud']
try:
    client = soundcloud.Client(
        client_id=settings['client_id'],
        client_secret=settings['client_secret'],
        username=settings['email'],
        password=settings['password']
    )
except Exception as e:
    log.error("Could not establish SoundCloud client: %s" % log.exc(e))

def parse(request):
    log.info("audio.parse")

    paths = save_files(request)
    if not len(paths):
        return None, "No files"

    # process the json
    data = None
    for path in paths:
        if path[-4:] == "json":
            try:
                with open(path) as f:
                    data = json.loads(f.read())
            except Exception as e:
                log.error(log.exc(e))
                return None, "Could not parse"
            break
    if data is None:
        return None, "No data"          

    # process the audio
    for path in paths:
        if path[-4:] != "json":
            break

    if 'TeamMember' in data:
        data['Member'] = data['TeamMember']
        del data['TeamMember']              
    member = "%s: " % data['Member'] if ('Member' in data and data['Member'] is not None and len(data['Member'].strip())) else ""
    notes = data['Notes'] if 'Notes' in data else ""
    title = "%s%s" % (member, notes)
    if not len(title.strip()):
        title = util.datestring(data['t_utc'], tz=config['local_tz'])
    log.info("--> title is %s" % title)        
    soundcloud_url = post_track(path, title)#yield gen.Task(post_track, path)
    log.debug("yielded")
    if soundcloud_url is None:
        return None, "Could not post to Soundcloud"
    data['SoundCloudURL'] = soundcloud_url
    return data


def post_track(path, title):
    log.info("Posting %s to soundcloud..." % path)
    # time.sleep(5)
    # return "http://soundcloud.com/brianhouse/test"
    try:
        with open(path, 'rb') as f:
            track = {'asset_data': f, 'sharing': "public", 'title': title}
            track = client.post('/tracks', track=track)
            soundcloud_url = track.permalink_url
    except Exception as e:
        log.error("--> could not post track to SoundCloud: %s" % log.exc(e))
        return None
    log.info("--> success: %s" % soundcloud_url)
    return soundcloud_url


"""
this is blocking. shouldnt be.

"""