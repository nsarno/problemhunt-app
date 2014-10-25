'use strict';

angular.module('problemhunt')
.config(function($translateProvider) {
  $translateProvider.translations('en', {
    'uvp' : 'Fashion retail, done right.',
    'uvp-sub' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'stay-tuned' : 'Stay tuned',
    'customer-role' : 'I\'m a fashion business.',
    'user-role' : 'I\'m a fashion customer.'
  });

  $translateProvider.preferredLanguage('en');
});

