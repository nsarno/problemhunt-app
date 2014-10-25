'use strict';

angular.module('problemhunt')
.factory('Prospect', function(Restangular) {
  return {
    create: function(params, callback) {
      console.log('create');
      Restangular.all('prospects').post({ prospect: params }).then(
        function(response) {
          callback();
        }
      );
    }
  };
});

