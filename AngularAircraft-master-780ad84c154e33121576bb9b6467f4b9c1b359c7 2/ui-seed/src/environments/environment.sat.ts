// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: true,
  domain: 'sat.arincdirect.net',
  app_name: 'system-dashboard',
  app_url: 'https://sat.arincdirect.net/system-dashboard',
  is_beta: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCW1fNEbzYS95vPEG_VLSpYb4LNy_M9R38',
    authDomain: 'ad-dashboard-sat.firebaseapp.com',
    databaseURL: 'https://ad-dashboard-sat.firebaseio.com',
    projectId: 'ad-dashboard-sat',
    storageBucket: 'ad-dashboard-sat.appspot.com',
    messagingSenderId: '818754986749'
  }
};
