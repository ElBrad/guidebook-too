'use strict';

/**
 * @ngdoc overview
 * @name bootleggersGuideApp
 * @description
 * # bootleggersGuideApp
 *
 * Main module of the application.
 */
angular
  .module('bootleggersGuideApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider)
  {
      $routeProvider
          .when('/',
          {
              templateUrl: 'views/main.html',
              controller: 'MainCtrl'
          })
          .when('/mission_guide',
          {
              templateUrl: 'views/missionGuide.html',
              controller: 'MissionGuideCtrl'
          })
          .when('/mission_guide/:missionId',
          {
              templateUrl: 'views/missionGuide.html',
              controller: 'MissionGuideCtrl'
          })
          .when('/booze_info',
          {
            templateUrl: 'views/boozeData.html',
            controller: 'BoozeCtrl'
          })
          .otherwise({
              redirectTo: '/'
          });
      });
