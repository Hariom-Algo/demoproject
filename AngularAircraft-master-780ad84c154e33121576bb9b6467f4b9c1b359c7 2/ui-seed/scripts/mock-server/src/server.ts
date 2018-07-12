import * as express from "express";
import * as path from "path";
import * as jwt from "jsonwebtoken";
import * as fs from "fs";
import { environment } from "./environment.local";
import * as cookieParser from "cookie-parser";
const LOGIN_ERROR = false; // we can create a ui around these later for settings
const ENV = environment;
const app = express();

if(ENV.production){
  console.log("This env is configured for production");
  process.exit();
}

//serve the built app here
app.use( express.static(__dirname + '../../../../dist' ) );
app.use(cookieParser());


// Add ADC ENDPOINTS BELOW


// return valid auth ticket cookie
//     res.cookie('auth_tkt', 'ABCDEFG',{maxAge:9000000});
app.post('/ADC/ADCContext/FlightStatusREST/Flights', (req, res) => {
  console.log("Rest Server being hit");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  console.log('Cookies' , req.cookies);
  res.cookie('auth_tkt', 'ABCDEFG',{maxAge:9000000});
  res.json({ "flights": [{ "offReport": false,
			   "status": "Completed",
			   "tailID": 6,
			   "onReport": false,
			   "dest": "KMEM",
			   "arrDateTime": "06 Sep 17 14:21",
			   "legID": 4,
			   "origin": "KBWI",
			   "depDateTime": "06 Sep 17 12:30",
			   "usage":{total:"300"},
			   "lastUpdated":"06 Sept 17 12:30",
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
			   "usage":{total:"300"},
			   "lastUpdated":"06 Sept 17 12:30",
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
			   "usage":{total:"300"},
			   "lastUpdated":"06 Sept 17 12:30",
			   "fpName": "",
			   "tail": "N103XA" }			 
			] });
});


const server = app.listen(9001, "localhost", () => {
    const {address, port} = server.address();
    console.log('Mock ADC Http listening on %s %s', address, port);
});
