'use strict';

angular.module('problemhunt')
.config(function($stateProvider, ACCESS_LEVELS) {
  $stateProvider.state('results', {
    url: '/results',
    templateUrl: 'partials/results.html',
    controller: 'ResultsController',
    access_levels: ACCESS_LEVELS.user
  });
})
.controller('ResultsController', function($scope, Auth, Problem) {
  $scope.organization = Auth.user().organization;
  $scope.tops = Problem.tops();
  console.log($scope.tops);
});
