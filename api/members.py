import geojson
from housepy import config, log

def assemble(self, search, limit, order):
    log.info("expeditions.assemble")
    members = {}
    try:
        results = self.db.features.find(search).distinct('properties.Member')
        for member in results:
            feature_types = list(self.db.features.find({'properties.Member': member}).distinct('properties.FeatureType'))
            members[member] = feature_types
    except Exception as e:
        return self.error(log.exc(e))
    response = members
    return self.json(response)
