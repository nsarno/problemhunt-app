'use strict';

angular.module('problemhunt')
.config(function($stateProvider, ACCESS_LEVELS) {
  $stateProvider.state('contribute', {
    url: '/contribute',
    templateUrl: 'partials/submit.html',
    controller: 'SubmitController',
    access_level: ACCESS_LEVELS.user
  });
})
.controller('SubmitController', function($scope, $state, Auth, Problem) {
  $scope.organization = Auth.user().organization;

  $scope.submit = function(problem) {
    Problem.submit(problem);
    $state.go('results');
  };
});

