'use strict';

angular.module('problemhunt')
.config(function($stateProvider, ACCESS_LEVELS) {
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: 'partials/dashboard.html',
    controller: 'DashboardController',
    access_level: ACCESS_LEVELS.user
  });
}).controller('DashboardController', function($scope, Auth, $state, PBHunt, Restangular) {
  $scope.logout = function() {
    Auth.logout();
    $state.go('home');
  };

  var fetchOrganization = function() {
    PBHunt.getOrganization(function(organization) {
      console.log('organization', organization);
      $scope.organization = organization;
    }); 
  };

  fetchOrganization();

  $scope.submitProblem = function(problem_params) {
    Restangular.all('problems').post({ problem: problem_params }).then(
      function(response) {
        fetchOrganization();
      }
    );
  };

  $scope.upvote = function(problem) {
    problem.upvoted = true;
    problem.upvote_count += 1;
    PBHunt.upvote(problem);
  };

  $scope.downvote = function(problem) {
    problem.upvoted = false;
    problem.upvote_count -= 1;
    PBHunt.downvote(problem);
  };
});

