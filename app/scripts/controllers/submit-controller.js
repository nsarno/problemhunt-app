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
.controller('SubmitController', function($scope, Auth, Problem) {
  $scope.organization = Auth.user().organization;

  $scope.submit = function(problem) {
    console.log('submit');
    Problem.submit(problem);
    $scope.submitted = true;
  };
});

