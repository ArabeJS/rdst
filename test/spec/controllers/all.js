'use strict';

describe('Controller: AllCtrl', function () {

  // load the controller's module
  beforeEach(module('rdstApp'));

  var AllCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    AllCtrl = $controller('AllCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AllCtrl.awesomeThings.length).toBe(3);
  });
});
