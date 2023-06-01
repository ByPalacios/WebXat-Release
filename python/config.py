import json, sys, os
def run(system):

    if ( system.startswith("win")):
        os="win"
    else:
        os="linux or mac"

    #config = {"FIRST_TIME": "yes"}
    config = {"FIRST_TIME": "yes", "OS":os}

    with open('ruinett-config.json', 'w') as f:
        json.dump(config, f)