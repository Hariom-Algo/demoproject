import * as express from 'express';
import * as path from 'path';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import * as bodyparser from 'body-parser';
import * as cookieParser from 'cookie-parser';


const app = express();

app.use(cookieParser());

// we can use this to serve the built app under 9001
app.use(express.static(__dirname + '../../../../dist'));
app.use(bodyparser.json());

app.get('/ADC/ADCContext/REST/aircraft', (req, res) => {
  console.log('Rest Server being hit');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  console.log('[Auth Tkt Cookie]', req.cookies);
  const json  = fs.readFileSync('./static-json/aircraft/aircraft.json', 'utf8');
  res.json(JSON.parse(json));

});

// Add more rest routes here as needed
app.post('/ADC/ADCContext/DashboardREST/Log', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  console.log('[Auth Tkt Cookie]', req.cookies);
  res.cookie('auth_tkt', 'ABCDEFG', { maxAge: 9000000 });
  console.log('POSTING ERROR LOG: ', req.body);
  res.json({ stored: true });
});

const server = app.listen(9001, 'localhost', () => {
  const { address, port } = server.address();
  console.log('Mock ADC Http listening on %s %s', address, port);
});
