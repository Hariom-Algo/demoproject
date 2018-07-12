// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

var host = 'local'.split('.')[0];
var domain = host.concat('.dev.arincdirect.net');
export const environment = {
  production: false,
  domain: domain,
  app_name: 'system-dashboard',
  app_url: 'https://'.concat(domain, '/system-dashboard'),
  is_beta: true,
  firebaseConfig: {
    apiKey: "AIzaSyA3l2Ssd7yZBkzE_mXzIf-xLRMTA44pUR8",
    authDomain: "ad-dashboard-dev.firebaseapp.com",
    databaseURL: "https://ad-dashboard-dev.firebaseio.com",
    projectId: "ad-dashboard-dev",
    storageBucket: "ad-dashboard-dev.appspot.com",
    messagingSenderId: "643883976237"
  }

};
