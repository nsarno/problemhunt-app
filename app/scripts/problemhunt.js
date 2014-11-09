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

//.constant('BASE_URL', 'https://problemhunt.herokuapp.com')
.constant('BASE_URL', 'http://0.0.0.0:8080')

.config(function($urlRouterProvider, $locationProvider, RestangularProvider,
      $stateProvider, BASE_URL) {

  $urlRouterProvider.otherwise('/home');

  // Set base url of problemhunt API
  RestangularProvider.setBaseUrl(BASE_URL);

  // Add interceptor to extract embbeded response
  RestangularProvider.addResponseInterceptor(function (data, operation, what) {
    if (operation === 'getList') {
      return data[what];
    }
    return data;
  });
});

