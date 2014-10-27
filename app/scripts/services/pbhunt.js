'use strict';

angular.module('problemhunt')
.factory('PBHunt', function(Restangular, Auth, $state) {
  var user = Restangular.one('users', Auth.user().id);
  var upvotes = Restangular.all('upvotes');
  var problems = [];

  return {
    nextProblem: function() {
      while (problems.length > 0 && (nextPb = problems.pop()).upvoted);
      if (problems.length === 0) {
        $state.go('submit'); 
      }
      return nextPb;
    },

    getOrganization: function(callback) {
      user.get().then(function(response) {
        problems = response.user.organization.problems;
        callback(response.user.organization);
      });
    },

    upvote: function(problem) {
      upvotes.post({problem_id: problem.id, user_id: Auth.user().id}).then(
        function(response) {
        }
      ); 
    },

    downvote: function(problem) {
      Restangular.one('upvotes', problem.upvote_id).remove();
    }
  }
});

