'use strict';

angular.module('problemhunt')
.factory('User', function(Restangular) {
  var baseUsers = Restangular.all('users');

  return {
    create: function(user_params, callback) {
      baseUsers.post({'user': user_params}).then(function(response) {
        callback();
      });
    }
  };
});
