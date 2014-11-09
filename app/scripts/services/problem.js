'use strict';

angular.module('problemhunt')
.factory('Problem', function(Auth, Restangular, $state) {
  var _problemStack = [];

  return {

    setupCards: function(callback) {
      Auth.user().then(function(response) {
        _problemStack = _.clone(response.user.organization.problems);
        callback();
      });
    },

    next: function() {
      var nextProblem;
      var nextFound = false;
      while (!nextFound) {
        console.log('stack len', _problemStack.length);
        if (_problemStack.length === 0) {
          $state.go('app.submit');
          return;
        } else {
          nextProblem = _problemStack.pop();
          console.log(nextProblem.upvoted);
          if (nextProblem.upvoted === false) {
            nextFound = true;
          }
        }
      }
      return nextProblem;
    },

    upvote: function(problem) {
      Restangular.all('upvotes').post({ 'problem_id': problem.id, 'user_id': Auth.user().id });
    },

    submit: function(problem) {
      Restangular.all('problems').post({problem: problem}).then(function(response) {
        console.log(response);
      });
    },

    tops: function(callback) {
      Auth.user().then(function(response) {
        callback(_.sortBy(response.user.organization.problems, function(pb) {
          return -pb.upvote_count;
        }).slice(0, 15)); 
      });
    }
  };
});

