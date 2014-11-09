'use strict';

angular.module('problemhunt')
.config(function($stateProvider, ACCESS_LEVELS) {
  $stateProvider.state('app.cards', {
    url: '/cards',
    templateUrl: 'partials/card.html',
    controller: 'CardController',
    accessLevel: ACCESS_LEVELS.user
  });
})
.controller('CardController', function($scope, Problem, Auth) {
  Auth.user().then(function(response) {
    $scope.organization = response.user.organization;
  });

  Problem.setupCards(function() {
    $scope.currentProblem = Problem.next();
  });

  $scope.upvote = function(problem) {
    Problem.upvote(problem);
    $scope.currentProblem = Problem.next();
  };

  $scope.ignore = function() {
    $scope.currentProblem = Problem.next();
  };
});

