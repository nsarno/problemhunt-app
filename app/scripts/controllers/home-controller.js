'use strict';

angular.module('problemhunt')
.config(function($stateProvider, ACCESS_LEVELS) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'partials/home.html',
    controller: 'HomeController',
    access_level: ACCESS_LEVELS.pub
  });
})
.controller('HomeController', function ($scope, $location, $anchorScroll) {
  $scope.visitor = {};
  $scope.emailSubmit = function(prospect) {
    $scope.submitted = !$scope.submitted;
    //if ($scope.registerForm.$valid) {
      //Prospect.create(prospect, function() {
        //$scope.submitted = true;
      //});
    //}
  };

  $scope.gotoAbout = function() {
    $location.hash('about');
    $anchorScroll();
  };
});

