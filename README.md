# Tepology API

This is a topology library API, in here I used express so you can make calls to it. If you don't want to use the default port 8080 assign an enviroment variable called PORT like this ---> export PORT=8888

# Installation

npm install

# Usage

Read a topology:

(GET) http://127.0.0.1:[port]/api/top1.json

Read a topology with id:

(GET) http://127.0.0.1:[port]/api/[topologyId]

Read the topologies:

(GET) http://127.0.0.1:[port]/api/topologies


Read the components of a topoloogy:

(GET) http://127.0.0.1:[port]/api/devices/[topologyId]


Write topology:

(POST) http://127.0.0.1:[port]/api/[topologyId]


Delete topology:

(DELETE) http://127.0.0.1:[port]/api/[topologyId]
