// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverUrl: 'https://alfatiha.co/FatihaAPI/',
  defaultLanguage: 'ar',
  supportedLanguages: ['en', 'ar'],
  firebase: {
    apiKey: 'AIzaSyAldsywQXj8_gKYFxMOSWpnCRLUjsI6Zn8',
    authDomain: 'alfateha-521bf.firebaseapp.com',
    databaseURL: 'https://alfateha-521bf.firebaseio.com',
    projectId: 'alfateha-521bf',
    storageBucket: 'alfateha-521bf.appspot.com',
    messagingSenderId: '682642921899',
    appId: '1:682642921899:web:ac76ed297839d827af5aee',
  },
  firebaseUser: {
    email: "alfateha@sieraj.com",
    password: "$ie&a7!c@m"
  },
  firebaseBucket: "alfateha-521bf.appspot.com"
};

// https://cors-anywhere.herokuapp.com/
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
