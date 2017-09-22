'use strict';

describe('Controller: ReportsAttendeesCtrl', function () {

  // load the controller's module
  beforeEach(module('rdstApp'));

  var ReportsAttendeesCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    ReportsAttendeesCtrl = $controller('ReportsAttendeesCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReportsAttendeesCtrl.awesomeThings.length).toBe(3);
  });
});
