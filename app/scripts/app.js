'use strict';

/**
 * @ngdoc overview
 * @name rdstApp
 * @description
 * # rdstApp
 *
 * Main module of the application.
 */
 var lng = function (v) {
   return lngs[v];
 };
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
      .when('/prc_std', {
        templateUrl: 'views/presence_student/presence_student.html',
        controller: 'PrcStdCtrl',
        controllerAs: 'prcStd'
      })
      .when('/rep_atd', {
        templateUrl: 'views/reports_attendees/reports_attendees.html',
        controller: 'ReportsAttendeesCtrl',
        controllerAs: 'reportsAttendees'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
