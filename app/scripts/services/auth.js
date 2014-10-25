'use strict';

angular.module('problemhunt')
.factory('Auth', function(Restangular, $cookieStore, ACCESS_LEVELS) {
  var _token = $cookieStore.get('token');
  var setToken = function(token) {
      _token = token;
      $cookieStore.put('token', _token);
  };

  return {
    isAuthorized: function(lvl) {
      return lvl === ACCESS_LEVELS.pub || (!!_token);
    },

    login: function(params, callback) {
      Restangular.all('auth').post({ user: params }).then(
        function(response) {
          console.log(response);
          setToken(response.token);
          callback();
        }
      );
    },

    setToken: setToken,

    token: function() {
      return _token;
    },

    logout: function() {
      _token = null;
      $cookieStore.remove('token');
    },

    isAuthenticated: function() {
      return !!_token;
    }
  };
})
.run(function($rootScope, $state, Auth) {
  $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
    console.log('Trying to access state with level', toState.access_level);
    if (!Auth.isAuthorized(toState.access_level)) {
      evt.preventDefault();
      $state.go('login');
    }
    if (toState.name === 'login' && Auth.isAuthenticated()) {
      evt.preventDefault();
      $state.go('dashboard');
    }
  });
});

