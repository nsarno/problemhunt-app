'use strict';

angular.module('problemhunt')
.factory('PBHunt', function(Restangular, Auth) {
  var user = Restangular.one('users', Auth.user().id);
  var upvotes = Restangular.all('upvotes');
  return {
    getOrganization: function(callback) {
      user.get().then(function(response) {
        console.log('user', response);
        callback(response.user.organization);
      });
    },

    upvote: function(problem) {
      upvotes.post({problem_id: problem.id, user_id: Auth.user().id}).then(
        function(response) {
          console.log(response);
        }
      ); 
    },

    downvote: function(problem) {
      Restangular.one('upvotes', problem.upvote_id).remove();
    }
  };
});

