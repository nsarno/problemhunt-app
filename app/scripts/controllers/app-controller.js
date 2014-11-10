'use strict';

angular.module('problemhunt')
.config(function($stateProvider, ACCESS_LEVELS) {
  $stateProvider.state('app', {
    url: '/app',
    templateUrl: 'partials/app.html',
    controller: 'AppController',
    accessLevel: ACCESS_LEVELS.user
  });
})
.controller('AppController', function($scope, $state, Auth) {
  $scope.logout = function() {
    Auth.logout();
    $state.go('login');
  };
});

