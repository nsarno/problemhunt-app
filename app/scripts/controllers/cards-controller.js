'use strict';

angular.module('problemhunt')
.config(function($stateProvider, ACCESS_LEVELS) {
  $stateProvider.state('cards', {
    url: '/cards',
    templateUrl: 'partials/card.html',
    controller: 'CardController',
    access_level: ACCESS_LEVELS.user
  });
})
.controller('CardController', function($scope, Problem, Auth) {
  Auth.user().then(function(response) {
    $scope.organization = response.user.organization;
  });

  Problem.setupCards(function() {
    $scope.current_problem = Problem.next();
  });

  $scope.upvote = function(problem) {
    Problem.upvote(problem);
    $scope.current_problem = Problem.next();
  };

  $scope.ignore = function(problem) {
    $scope.current_problem = Problem.next();
  };
});

