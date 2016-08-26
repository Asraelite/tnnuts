#!usr/bin/node

let webServer = new (require('./web'))();
webServer.start();
