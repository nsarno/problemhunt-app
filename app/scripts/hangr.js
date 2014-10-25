'use strict';

angular.module('hangr', [
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
//.constant('BASE_URL', 'https://hangr-api.herokuapp.com')
.constant('BASE_URL', 'http://0.0.0.0:8080')
.config(function($urlRouterProvider, $locationProvider, RestangularProvider, BASE_URL) {

  $urlRouterProvider.otherwise('/');

  // use the HTML5 History API
  //$locationProvider.html5Mode(true);

  // Set base url of Hangr API
  RestangularProvider.setBaseUrl(BASE_URL);

  // Add interceptor to extract embbeded response
  RestangularProvider.addResponseInterceptor(function (data, operation, what) {
    if (operation === 'getList') {
      return data[what];
    }
    return data;
  });
});

