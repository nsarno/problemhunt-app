'use strict';

angular.module('hangr')
.factory('AuthInterceptor', function ($rootScope, $q, $cookieStore, $injector, BASE_URL) {
	return {
		request: function (config) {
			config.headers = config.headers || {};
			if ($cookieStore.get('token')) {
				config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
			}
			return config;
		},
		response: function (response) {
		  var $state = $injector.get('$state');
		  console.log('>>', $state);
		  console.log('>>', $state.current);
			return response || $q.when(response);
		},
	  responseError: function (rejection) {
	    switch (rejection.status) {
        case 401:
          console.log(rejection.config.url);
          if (rejection.config.url !== BASE_URL + '/auth') {
            $rootScope.$broadcast('auth:loginRequired');
          }
          break;

        case 403:
          $rootScope.$broadcast('auth:forbidden');
          break;

        case 404:
          $rootScope.$broadcast('auth:notFound');
          break;

        case 500:
          $rootScope.$broadcast('server:error');
          break;
      }
      return $q.reject(rejection);
    }
	};
});

angular.module('hangr')
.config(function ($httpProvider) {
	  $httpProvider.interceptors.push('AuthInterceptor');
});

