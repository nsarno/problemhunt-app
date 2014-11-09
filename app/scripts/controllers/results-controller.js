'use strict';

angular.module('problemhunt')
.config(function($stateProvider, ACCESS_LEVELS) {
  $stateProvider.state('app.results', {
    url: '/results',
    templateUrl: 'partials/results.html',
    controller: 'ResultsController',
    accessLevels: ACCESS_LEVELS.user
  });
})
.controller('ResultsController', function($scope, Auth, Problem) {
  Auth.user().then(function(response) {
    $scope.organization = response.user.organization;  
  });
  Problem.tops(function(tops) {
    $scope.tops = tops;
  });

  $scope.logout = function() {
    Auth.logout();
  };
});
