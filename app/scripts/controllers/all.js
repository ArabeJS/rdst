'use strict';

/**
 * @ngdoc function
 * @name rdstApp.controller:AllCtrl
 * @description
 * # AllCtrl
 * Controller of the rdstApp
 */
angular.module('rdstApp')
  .controller('AllCtrl', function ($scope, $location) {
    $scope.lng = lng;

    $scope.go = function (v) {
      $location.path(v);
    }
  });
