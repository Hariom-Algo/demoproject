"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fs = require("fs");
var bodyparser = require("body-parser");
var cookieParser = require("cookie-parser");
var app = express();
app.use(cookieParser());
// we can use this to serve the built app under 9001
app.use(express.static(__dirname + '../../../../dist'));
app.use(bodyparser.json());
app.get('/ADC/ADCContext/REST/aircraft', function (req, res) {
    console.log('Rest Server being hit');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    console.log('[Auth Tkt Cookie]', req.cookies);
    var json = fs.readFileSync('./static-json/aircraft/aircraft.json', 'utf8');
    console.log(json);
    res.json(JSON.parse(json));
});
// Add more rest routes here as needed
app.post('/ADC/ADCContext/DashboardREST/Log', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    console.log('[Auth Tkt Cookie]', req.cookies);
    res.cookie('auth_tkt', 'ABCDEFG', { maxAge: 9000000 });
    console.log('POSTING ERROR LOG: ', req.body);
    res.json({ stored: true });
});
var server = app.listen(9001, 'localhost', function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log('Mock ADC Http listening on %s %s', address, port);
});
