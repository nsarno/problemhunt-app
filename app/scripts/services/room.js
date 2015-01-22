'use strict';

angular.module('problemhunt')
.factory('Room', function(Restangular) {
  var baseRoom = Restangular.all('rooms');

  return {

    all: function() {
      return baseRoom.getList();
    },

    findByName: function(roomName) {
      return baseRoom.getList({'name': roomName});
    },

    create: function(newRoom) {
      return baseRoom.post({'room': newRoom});
    },

    destroy: function(room) {
      return room.remove();
    },

    join: function(room) {
      return room.one('rooms', room.id).customPOST({}, 'follow');
    },

    leave: function(room) {
      return room.customDELETE('unfollow');
    },

    createProblem: function(room, newProblem) {
      return room.all('problems').post({'problem': newProblem});
    },

    deleteProblem: function(problem) {
      return Restangular.one('problems', problem.id).remove();
    },

    upvoteProblem: function(problem) {
      return Restangular.one('problems', problem.id).customPOST({}, 'upvote');
    },

    downvoteProblem: function(problem) {
      return Restangular.one('problems', problem.id).customDELETE('downvote');
    }
  };
});
