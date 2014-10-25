'use strict';

angular.module('hangr')
.config(function($stateProvider, ACCESS_LEVELS) {
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: 'partials/dashboard.html',
    controller: 'DashboardController',
    access_level: ACCESS_LEVELS.user
  });
}).controller('DashboardController', function($scope, Auth, $state) {
  $scope.logout = function() {
    Auth.logout();
    $state.go('home');
  };
});

