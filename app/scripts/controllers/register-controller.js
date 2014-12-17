'use strict';

angular.module('problemhunt')
.config(function($stateProvider, ACCESS_LEVELS) {
  $stateProvider.state('home.register', {
    url: '/register',
    templateUrl: 'partials/register.html',
    controller: 'RegisterController',
    accessLevel: ACCESS_LEVELS.pub
  });
})
.controller('RegisterController', function($scope, $state, User, Auth) {
  $scope.register = function(newUser) {
    User.create(newUser, function() {
      Auth.login(newUser, function() {
        $state.go('app');
      });
    });
  };
});
