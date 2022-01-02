// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  theme: {
    presets: [
      {
        id: 1000,
        default: 'SYSTEM',
        theme: {
          name: 'Pink/black',
          className: 'pink-black',
          accentColor: '#ec4899',
          secondaryColor: '#000',
        },
      },
      {
        id: 1001,
        default: 'SYSTEM',
        theme: {
          name: 'Purple/Pink',
          className: 'purple-pink',
          accentColor: '#8e3a89',
          secondaryColor: '#df8fc5',
        },
      },
      {
        id: 1002,
        default: 'SYSTEM',
        theme: {
          name: 'Orange/Black',
          className: 'orange-black',
          accentColor: '#fdc029',
          secondaryColor: '#171820',
        },
      },
    ],
    default: 1000,
    storage_key_name: '_active-theme',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
