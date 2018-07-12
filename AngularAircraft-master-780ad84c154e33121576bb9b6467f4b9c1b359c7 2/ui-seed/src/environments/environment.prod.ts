// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: true,
  domain: 'direct.arinc.net',
  app_name: 'system-dashboard',
  app_url: 'https://direct.arinc.net/system-dashboard',
  is_beta: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCajQu4Fth8g3LIe9dAge9ufYUjQOe7iGc',
    authDomain: 'ad-dashboard-prod.firebaseapp.com',
    databaseURL: 'https://ad-dashboard-prod.firebaseio.com',
    projectId: 'ad-dashboard-prod',
    storageBucket: 'ad-dashboard-prod.appspot.com',
    messagingSenderId: '262110018783'
  }
};
