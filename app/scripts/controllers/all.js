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
    $scope.lng = function (v) {
      return lngs[v];
    };
    
    $scope.go = function (v) {
      $location.path(v);
    }
  });
