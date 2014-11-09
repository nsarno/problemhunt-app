'use strict';

angular.module('problemhunt')
.config(function($stateProvider, ACCESS_LEVELS) {
  $stateProvider.state('app.submit', {
    url: '/submit',
    templateUrl: 'partials/submit.html',
    controller: 'SubmitController',
    accessLevel: ACCESS_LEVELS.user
  });
})
.controller('SubmitController', function($scope, $state, Auth, Problem) {
  Auth.user().then(function(response) {
    $scope.organization = response.user.organization;
  });

  $scope.submit = function(problem) {
    Problem.submit(problem);
    $state.go('app.results');
  };

  $scope.ignore = function() {
    $state.go('app.results');
  };
});

