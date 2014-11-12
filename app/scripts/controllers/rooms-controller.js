'use strict';

angular.module('problemhunt')
.config(function($stateProvider, ACCESS_LEVELS) {
  $stateProvider.state('app.rooms', {
    abstract: true,
    url: '^/rooms',
    template: '<div ui-view></div>',
    controller: 'RoomsController',
    accessLevel: ACCESS_LEVELS.user
  });
})
.controller('RoomsController', function($scope, Room) {

});