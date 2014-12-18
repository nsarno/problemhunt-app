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
})
.directive('activeTab', function($state, $compile) {
  return {
    link: function($scope, element, attrs) {
      $scope.$on("$stateChangeSuccess", function (event, current, previous) {
        for (var i = 0; i < element[0].children.length; ++i) {
          var li = element[0].children[i];
          var a = li.children[0];
          if (a.attributes['ui-sref'].value === current.name) {
            $(li).addClass('active');
          } else {
            $(li).removeClass('active');
          }
        }
      });
    }
  }
})
