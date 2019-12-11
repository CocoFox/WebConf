var http = require('http');

var express = require('express');
var server = express();
var path = require('path');

server.get('/conf', function (request, response) {
    response.sendfile(path.resolve('./client/index.html'));
   });

server.listen(8080);
