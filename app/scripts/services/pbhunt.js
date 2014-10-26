'use strict';

angular.module('problemhunt')
.factory('PBHunt', function(Restangular, Auth) {
  var user = Restangular.one('users', Auth.user().id);
  return {
    getOrganization: function(callback) {
      user.get().then(function(response) {
        console.log('user', response);
        callback(response.user.organization);
      });
    }
  };
});
