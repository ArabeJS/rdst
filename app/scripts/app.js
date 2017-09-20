'use strict';

/**
 * @ngdoc overview
 * @name rdstApp
 * @description
 * # rdstApp
 *
 * Main module of the application.
 */
angular
  .module('rdstApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngRoute',
    'ngMaterial',
    'gridshore.c3js.chart',
    'mdDataTable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/prc_mst', {
        templateUrl: 'views/presence_masters/presence_masters.html',
        controller: 'PrcMstCtrl',
        controllerAs: 'prcMst'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
