#!usr/bin/node

'use strict';

let webServer = new (require('./web'))();
webServer.start();
