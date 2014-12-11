'use strict';

angular.module('problemhunt')
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
			return response || $q.when(response);
		},
	  responseError: function (rejection) {
	    switch (rejection.status) {
        case 401:
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

angular.module('problemhunt')
.config(function ($httpProvider) {
	  $httpProvider.interceptors.push('AuthInterceptor');
});

