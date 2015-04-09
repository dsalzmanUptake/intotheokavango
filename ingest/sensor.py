from housepy import config, log, strings, net
from ingest import ingest_plain_body

def parse(request):
    log.info("sensor.parse")
    try:
        message = ingest_plain_body(request)
        data = net.urldecode(message)    
        body = data['body']
        log.debug(body)        
        content = strings.singlespace(body)
        tokens = content.split(" ")
        log.debug(tokens)
        data = {'t_utc': tokens[0], 'SensorName': tokens[1], strings.camelcase(tokens[2]): tokens[3]}
    except Exception as e:
        log.error("Twilio post is malformed: %s" % log.exc(e))
        return None
    return data

"""
will we have location in this?
if not, we'll want to prevent it from being estimated, right?

"""