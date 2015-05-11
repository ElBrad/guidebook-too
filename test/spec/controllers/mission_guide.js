'use strict';

describe('Controller: MissionGuideCtrl', function ()
{

  // load the controller's module
  beforeEach(module('bootleggersGuideApp'));

  var MissionGuideCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope)
  {
    scope = $rootScope.$new();
    MissionGuideCtrl = $controller('MissionGuideCtrl',
    {
      $scope: scope
    });

  }));

  it('should attach a list of awesomeThings to the scope', function ()
  {
    expect(scope.awesomeThings.length).toBe(3);
  });

});
