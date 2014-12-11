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
  function fetchCurrentRoom() {
    Room.findByName($stateParams.roomName).then(function(response) {
      $scope.room = response[0];
    });    
  }

  $scope.createProblem = function(room, newProblem) {
    Room.createProblem(room, newProblem).then(function(response) {
      fetchCurrentRoom();
    });
  };

  $scope.deleteProblem = function(problem) {
    Room.deleteProblem(problem).then(function(response) {
      fetchCurrentRoom();
    });
  };

  $scope.upvoteProblem = function(problem) {
    Room.upvoteProblem(problem).then(function(response) {
      fetchCurrentRoom();
    });
  };

  $scope.downvoteProblem = function(problem) {
    Room.downvoteProblem(problem).then(function(response) {
      fetchCurrentRoom();
    });
  };  

  fetchCurrentRoom();
});
