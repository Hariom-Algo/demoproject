# angular-seed

> Angular seed project for ARINCDIRECT chock full of good stuff to get started


Documentation for Devs 
-----------------
- [Developer materials for project](docs/dev/)

- [Code Coverage](docs/cabin-dashboard-docs/coverage.html)

- [Code Documentation](docs/cabin-dashboard-docs/index.html)

- [Architechture](docs/arch/ngrx.md)

- [Release Notes](docs/release-notes/)



# Overview
This app is a seed for ARINCDIRECT.
This is based off the cabin-dashboard project
- NGRX which can hit ADC endpoints
- Service worker which gives us progressive webapp capability
- Core Module for basic webapp stuff navbar loading etc..
- Custom Defined index.js which gives better first paint time
- Global Error Handler
- Local server
- Graphing libs
- Predefined css files with typography
- Defined gitlab-ci.yml
- Much more just look around and learn :)

#TODO
- Rip out firebase stuff as needed.
- Define global styles for projects
- MAKE IT BETTER OPEN SOURCE 
 



## Quick Start

```sh
$ npm install -g angular-cli
$ git clone $THISREPO
$ cd dashboard-ui
$ npm install
```


### App Local Dev
 Local development uses a mock ADC server see here:
 [Local Dev README](./scripts/mock-server/README.md)

Before you are able to connect to firebase and work locally you must get a key
Edit Your package.json to include the key as the argument

```javascript
  "scripts": {
    "start": "ng serve --proxy-config proxy.conf.json && node scripts/server.js $KEY"
    }
```

### Working on Dev Machines
The dist/ directory should be served by the Apache configuration


## Build
builds the project and puts it in the dist directory
```
./build.sh
```


## Testing

### Running unit tests
Run `ng test` or `npm test` execute the unit tests via [Karma](https://karma-runner.github.io).
1. Tests current run under PhantomJS but moving to chrome canary.
2. Need to develop a docker image for testing probably use ubuntu as the base.

####  Code-Coverage
To keep with TDD and ensure our stuff is good 
```
ng test --watch=false --code-coverage
```

### end-to-end tests
THIS IS A BIG TODO
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.



## Versioning
Only gitlab should be running the versioning

```sh
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]

```

## Authors
cabin-services people

crab people crab people looks like crab talks like people