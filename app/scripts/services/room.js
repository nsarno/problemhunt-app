'use strict';

angular.module('problemhunt')
.factory('Room', function(Restangular) {
  var baseRoom = Restangular.all('rooms');

  return {
    all: function() {
      return baseRoom.getList();
    },

    create: function(newRoom) {
      return baseRoom.post({'room': newRoom});
    }
  };
});
