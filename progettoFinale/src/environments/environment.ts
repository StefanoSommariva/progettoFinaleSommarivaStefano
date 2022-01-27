// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clienti: "http://epicode.online/epicodebeservice_v2/api/clienti?page=0&size=20&sort=id,ASC",
  clientiId: "http://epicode.online/epicodebeservice_v2/api/clienti/",
  option: "http://epicode.online/epicodebeservice_v2/",
  fatture: "http://epicode.online/epicodebeservice_v2/api/fatture?page=0&size=20&sort=id,ASC",
  fatturaID:"http://epicode.online/epicodebeservice_v2/api/fatture/",
  comuni: "http://epicode.online/epicodebeservice_v2/api/comuni?page=0&size=20&sort=id,ASC",
  province: "http://epicode.online/epicodebeservice_v2/api/province?page=0&size=20&sort=id,ASC"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
