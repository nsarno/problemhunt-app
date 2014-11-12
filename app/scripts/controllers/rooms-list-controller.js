'use strict';

angular.module('problemhunt')
.config(function($stateProvider, ACCESS_LEVELS) {
  $stateProvider.state('app.rooms.list', {
    url: '/list',
    templateUrl: 'partials/rooms.list.html',
    controller: 'RoomsListController',
    accessLevel: ACCESS_LEVELS.user
  });
})
.controller('RoomsListController', function($scope, Room) {
  function fetchRooms() {
    Room.all().then(function(rooms) {
      $scope.rooms = rooms;
    });
  }

  $scope.createRoom = function(newRoom) {
    Room.create(newRoom).then(function(response) {
      console.log(response);
      fetchRooms();
    });
  };

  fetchRooms();
});