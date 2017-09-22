'use strict';

/**
 * @ngdoc function
 * @name rdstApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the rdstApp
 */
angular.module('rdstApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.menu = {
      'L1': [
        {//home
          'title': lng('02'),
          'icon': 'home',
          'url': '#'
        },
        {//presence masters
          'title': lng('03'),
          'icon': 'alarm',
          'url': 'prc_mst'
        },
        {//presence students
          'title': lng('04'),
          'icon': 'alarm',
          'url': '#'
        },
        {//Reports Attendees And absence
          'title': lng('05'),
          'icon': 'alarm_on',
          'url': '#'
        }
      ],
      /**************=- line 2 -=**************/
      'L2': [
        {//notifications
          'title': lng('06'),
          'icon': 'notifications_active',
          'url': '#'
        },
        {//Management of Professors
          'title': lng('07'),
          'icon': 'people',
          'url': 'prc_mst'
        },
        {//Management of students
          'title': lng('08'),
          'icon': 'person_pin',
          'url': '#'
        },
        {//Document Management
          'title': lng('09'),
          'icon': 'folder',
          'url': '#'
        }
      ],
      /**************=- line 3 -=**************/
      'L3': [
        {//notifications
          'title': lng('10'),
          'icon': 'format_list_numbered',
          'url': '#'
        },
        {//statistics
          'title': lng('11'),
          'icon': 'timeline',
          'url': 'prc_mst'
        },
        {//the program Study
          'title': lng('12'),
          'icon': 'view_quilt',
          'url': '#'
        },
        {//users
          'title': lng('13'),
          'icon': 'group_work',
          'url': '#'
        }
      ],
      /**************=- line 4 -=**************/
      'L4': [
        {//contact mail
          'title': lng('10'),
          'icon': 'contact_mail',
          'url': '#'
        },
        {//info app
          'title': lng('11'),
          'icon': 'info_outline',
          'url': 'prc_mst'
        },
        {//app activation
          'title': lng('12'),
          'icon': 'vpn_key',
          'url': '#'
        },
        {//settings
          'title': lng('13'),
          'icon': 'settings',
          'url': '#'
        }
      ]
    };
  });
