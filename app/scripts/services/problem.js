'use strict';

angular.module('problemhunt')
.factory('Problem', function(Auth, Restangular, $state) {
  var _problemStack = _.clone(Auth.user().organization.problems);
  return {
    next: function() {
      if (_problemStack.length === 0) {
        $state.go('contribute');
      }
      else {
        return _problemStack.pop();
      }
    },

    upvote: function(problem) {
      Restangular.all('upvotes').post({ problem_id: problem.id, user_id: Auth.user().id });
    },

    submit: function(problem) {
      Restangular.all('problems').post({problem: problem}).then(function(response) {
        console.log(response);
      });
    }
  };
});
