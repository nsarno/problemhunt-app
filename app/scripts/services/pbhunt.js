'use strict';

angular.module('problemhunt')
.factory('PBHunt', function(Restangular, Auth) {
  var organizations = Restangular.all('organizations').getList();
  return {
    getOrganization: function() {
      return Auth.user().organization;
    }
  };
});
