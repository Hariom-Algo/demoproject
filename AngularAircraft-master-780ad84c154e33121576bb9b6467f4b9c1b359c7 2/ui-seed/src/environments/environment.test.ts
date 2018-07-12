// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  domain: 'localhost:4200',
  app_name: 'system-dashboard',
  app_url: 'https://localhost:4200/system-dashboard',
  is_beta: true,
  firebaseConfig: {
    apiKey: 'AIzaSyAvD7VFDi9e1a5Vk8BrlK93_ffk_KlumeY',
    authDomain: 'fir-test-bee7a.firebaseapp.com',
    databaseURL: 'https://fir-test-bee7a.firebaseio.com',
    projectId: 'fir-test-bee7a',
    storageBucket: 'fir-test-bee7a.appspot.com',
    messagingSenderId: '761226095875'
  }
};
