'use strict';

describe('Controller: PrcStdCtrl', function () {

  // load the controller's module
  beforeEach(module('rdstApp'));

  var PrcStdCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    PrcStdCtrl = $controller('PrcStdCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PrcStdCtrl.awesomeThings.length).toBe(3);
  });
});
