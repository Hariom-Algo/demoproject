// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  domain: 'localhost:4200',
  app_name: 'cabin-dashboard',
  app_url: 'https://localhost:4200/cabin-dashboard',
  is_beta: true,
  email: "shane-721@ad-dashboard-dev.iam.gserviceaccount.com",
  firebaseConfig: {
    apiKey: "AIzaSyA3l2Ssd7yZBkzE_mXzIf-xLRMTA44pUR8",
    authDomain: "ad-dashboard-dev.firebaseapp.com",
    databaseURL: "https://ad-dashboard-dev.firebaseio.com",
    projectId: "ad-dashboard-dev",
    storageBucket: "ad-dashboard-dev.appspot.com",
    messagingSenderId: "643883976237"
  }
};
