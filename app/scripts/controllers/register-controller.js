'use strict';

angular.module('problemhunt')
.config(function($stateProvider, ACCESS_LEVELS) {
  $stateProvider.state('register', {
    url: '/register',
    templateUrl: 'partials/register.html',
    controller: 'RegisterController',
    accessLevel: ACCESS_LEVELS.pub
  });
})
.controller('RegisterController', function($scope, $state, User, Auth) {
  $scope.register = function(user_params) {
    console.log('register', user_params);
    User.create(user_params, function() {
      Auth.login(user_params, function() {
        $state.go('app.cards');
      });
    });
  };
});
