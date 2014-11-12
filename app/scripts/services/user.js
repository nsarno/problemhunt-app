'use strict';

angular.module('problemhunt')
.factory('User', function(Restangular) {
  var baseUsers = Restangular.all('users');

  return {
    create: function(newUser, callback) {
      baseUsers.post({'user': newUser}).then(function(response) {
        callback();
      });
    }
  };
});
