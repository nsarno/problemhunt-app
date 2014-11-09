'use strict';

angular.module('problemhunt')
.config(function($stateProvider, ACCESS_LEVELS) {
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'partials/login.html',
    controller: 'LoginController',
    accessLevel: ACCESS_LEVELS.pub
  });
})
.controller('LoginController', function($scope, $rootScope, $state, Auth) {
  $scope.login = function(params) {
    Auth.login(params, function() {
      $rootScope.user = { email: $scope.user.email };
      $state.go('app.cards'); 
    });
  };
});

