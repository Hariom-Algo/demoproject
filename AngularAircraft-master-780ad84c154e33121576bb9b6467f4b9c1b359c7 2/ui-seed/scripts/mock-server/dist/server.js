"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var environment_local_1 = require("./environment.local");
var cookieParser = require("cookie-parser");
var LOGIN_ERROR = false; // we can create a ui around these later for settings
var ENV = environment_local_1.environment;
var app = express();
if (ENV.production) {
    console.log("This env is configured for production");
    process.exit();
}
//serve the built app here
app.use(express.static(__dirname + '../../../../dist'));
app.use(cookieParser());
// Add ADC ENDPOINTS BELOW
// return valid auth ticket cookie
//     res.cookie('auth_tkt', 'ABCDEFG',{maxAge:9000000});
app.post('/ADC/ADCContext/FlightStatusREST/Flights', function (req, res) {
    console.log("Rest Server being hit");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    console.log('Cookies', req.cookies);
    res.cookie('auth_tkt', 'ABCDEFG', { maxAge: 9000000 });
    res.json({ "flights": [{ "offReport": false,
                "status": "Completed",
                "tailID": 6,
                "onReport": false,
                "dest": "KMEM",
                "arrDateTime": "06 Sep 17 14:21",
                "legID": 4,
                "origin": "KBWI",
                "depDateTime": "06 Sep 17 12:30",
                "usage": { total: "300" },
                "lastUpdated": "06 Sept 17 12:30",
                "fpName": "",
                "tail": "N103XA" },
            { "offReport": false,
                "status": "Completed",
                "tailID": 6,
                "onReport": false,
                "dest": "KMEM",
                "arrDateTime": "06 Sep 17 14:21",
                "legID": 4,
                "origin": "KBWI",
                "depDateTime": "06 Sep 17 12:30",
                "usage": { total: "300" },
                "lastUpdated": "06 Sept 17 12:30",
                "fpName": "",
                "tail": "N103XA" },
            { "offReport": false,
                "status": "Completed",
                "tailID": 6,
                "onReport": false,
                "dest": "KMEM",
                "arrDateTime": "06 Sep 17 14:21",
                "legID": 4,
                "origin": "KBWI",
                "depDateTime": "06 Sep 17 12:30",
                "usage": { total: "300" },
                "lastUpdated": "06 Sept 17 12:30",
                "fpName": "",
                "tail": "N103XA" }
        ] });
});
var server = app.listen(9001, "localhost", function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log('Mock ADC Http listening on %s %s', address, port);
});
