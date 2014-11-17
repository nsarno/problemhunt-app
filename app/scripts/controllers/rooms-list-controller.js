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
.controller('RoomsListController', function($scope, $state, Room) {
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

  $scope.deleteRoom = function(room) {
    Room.destroy(room).then(function(response) {
      console.log(response);
      fetchRooms();
    });
  };

  $scope.joinRoom = function(room) {
    Room.join(room).then(function(response) {
      console.log(response);
      fetchRooms();
    });
  };

  $scope.leaveRoom = function(room) {
    Room.leave(room).then(function(response) {
      console.log(response);
      fetchRooms();
    });
  };

  fetchRooms();
});
