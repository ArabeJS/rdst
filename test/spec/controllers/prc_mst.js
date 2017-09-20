'use strict';

describe('Controller: PrcMstCtrl', function () {

  // load the controller's module
  beforeEach(module('rdstApp'));

  var PrcMstCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    PrcMstCtrl = $controller('PrcMstCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PrcMstCtrl.awesomeThings.length).toBe(3);
  });
});
