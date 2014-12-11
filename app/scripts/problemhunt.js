'use strict';

angular.module('problemhunt', [
    'ngTouch',
    'ngCookies',
    'restangular',
    'ui.router',
    'angulartics',
    'angulartics.google.analytics',
    'pascalprecht.translate'
])

.constant('ACCESS_LEVELS', {
  pub: 1,
  user: 2
})
.constant('BASE_URL', 'https://problemhunt.herokuapp.com')
.config(function($urlRouterProvider, $locationProvider, RestangularProvider,
      $stateProvider, BASE_URL) {

  $urlRouterProvider.otherwise('/');

  // Set base url of problemhunt API
  RestangularProvider.setBaseUrl(BASE_URL);

  // Add interceptor to extract embbeded response
  RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response) {
    if (operation === 'getList') {
      // console.log(data);
      // console.log(what);
      // console.log(operation);
      // console.log(url);
      // console.log(response);
      return data[what];
    }
    return data;
  });
});

