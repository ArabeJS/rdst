'use strict';

/**
 * @ngdoc function
 * @name rdstApp.controller:PrcMstCtrl
 * @description
 * # PrcMstCtrl
 * Controller of the rdstApp
 */
angular.module('rdstApp')
  .controller('PrcMstCtrl', function () {
    function listHig() {
      var wh = $(window).height() - 250;
      $('head').append('<style>.RD-prc-mst-lst tbody{height:'+wh+'px}</style>')
    }
    listHig();
    $(window).on('resize',listHig);
  });
