'use strict';

angular.module('problemhunt')
.factory('Auth', function(Restangular, $cookieStore, ACCESS_LEVELS) {
  var _token = $cookieStore.get('token');
  var _user = $cookieStore.get('user');
  var setToken = function(token) {
      _token = token;
      $cookieStore.put('token', _token);
  };

  var setUser = function(user) {
    _user = user;
    $cookieStore.put('user', _user);
  };

  return {
    isAuthorized: function(lvl) {
      return lvl === ACCESS_LEVELS.pub || (!!_token);
    },

    login: function(params, callback) {
      Restangular.all('auth').post({ user: params }).then(
        function(response) {
          setToken(response.token);
          Restangular.one('users', response.user_id).get().then(function(response) {
            setUser(response.user);
            callback();
          });
        }
      );
    },

    setToken: setToken,

    token: function() {
      return _token;
    },

    setUser: setUser,

    user: function() {
      return Restangular.one('users', _user.id).get();
    },

    logout: function() {
      _token = null;
      _user = null;
      $cookieStore.remove('token');
      $cookieStore.remove('user');
    },

    isAuthenticated: function() {
      return !!_token;
    }
  };
})
.run(function($rootScope, $state, Auth) {
  $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
    if (!Auth.isAuthorized(toState.accessLevel)) {
      evt.preventDefault();
      $state.go('login');
    }
    if ((toState.name === 'login' || toState.name === 'register') && Auth.isAuthenticated()) {
      evt.preventDefault();
      $state.go('app');
    }
  });
});
