'use strict';

angular.module('problemhunt')
.config(function($stateProvider, ACCESS_LEVELS) {
  $stateProvider.state('app.rooms.detail', {
    url: '/detail/:roomName',
    templateUrl: 'partials/rooms.detail.html',
    controller: 'RoomsDetailController',
    accessLevel: ACCESS_LEVELS.user
  });
})
.controller('RoomsDetailController', function($scope, Room, $stateParams) {
  $scope.roomName = $stateParams.roomName;
});