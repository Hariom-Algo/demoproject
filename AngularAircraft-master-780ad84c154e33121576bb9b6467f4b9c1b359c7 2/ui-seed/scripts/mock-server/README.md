# Dashboard-ui mocks

An attempt to start cataloging the static-json we will use for local-dev

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)


## location 
```sh
 scripts/mock-server
```    
## Installation

npm install then use the mock-rest to point 

```sh
npm install
tsc
node dist/server.js 
```

For the full experience you can build your dashboard-app and run it under dist/mock-rest.js
```sh
cp $PATH_TO_DASHBOARD/dist dist/

#App will now be served on 9001 I need to add a port option... timebox
node dist/mock-rest.js $YOUR_DASHBOARD_KEY
```

## Usage
Currently the app will just listen on 9001 and generate a jwt token for the user to use against firebase
You can create your own endpoint in the server to get post or whatever you want just go off the example of mock-jwt
- Also you can put your build in dist

This will be moved to the current dashboard ui once all the basic mocks are needed.
Eventually we will just use the enviornments. Especially for enviornment.local


### Adding an ADC rest path
The example below displays a get request and returns mock json along iwth a mock cookie
```typescript
app.get('/ADC/ADCContext/DashboardREST/Authenticate', (req, res) => {
  console.log("Rest Server being hit");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  .
  .
  .
  // mock the auth tkt cookie
 res.cookie('auth_tkt', 'ABCDEFG',{maxAge:9000000});
 // generate jwt token
 let token =jwt.sign(payload,key.private_key,{ algorithm:'RS256',expiresIn: '1h' });
res.json({ jwt: token }); // json response 


```



### static-json
static-json directory houses the static data currently for a user this can be expanded upon
via the mock-ws.ts file later ... timebox

