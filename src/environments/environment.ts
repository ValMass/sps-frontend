// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const apiUrl = 'https://79.8.14.12:10080/spstimesheet/';

export const environment = {
  production: false,

  apiUrl: 'http://localhost:8080',
  // authenticationUrl : 'http://localhost:4000/users/authenticate',
  // usersUrl: 'http://localhost:4000/users',

  authenticationUrl : 'https://79.8.14.12:10080/spstimesheet/login.php',
  usersUrl: 'https://79.8.14.12:10080/spstimesheet/users/',
  userCreation: apiUrl + '/user/createUser.php',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
