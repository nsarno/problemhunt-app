'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('hangr'));

  beforeEach(inject(function($rootScope) {
  	scope = $rootScope.$new();
  }));

});
