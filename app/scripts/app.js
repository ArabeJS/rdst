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
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
