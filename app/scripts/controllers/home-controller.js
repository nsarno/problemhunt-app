'use strict';

angular.module('problemhunt')
.config(function($stateProvider, ACCESS_LEVELS) {
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'partials/home.html',
    controller: 'HomeController',
    accessLevel: ACCESS_LEVELS.pub
  });
})
.controller('HomeController', function($scope, $rootScope, $state, Auth) {
  
});
