'use strict';

/**
 * @ngdoc function
 * @name bootleggersGuideApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bootleggersGuideApp
 */
angular.module('bootleggersGuideApp')
    .controller('MissionGuideCtrl', function ($scope, $routeParams, $http, $window)
    {
        $scope.mission_id = $routeParams.missionId;

        console.log($window.location.pathname);

        $http.get($window.location.pathname + 'mission_guide.json')
            .success(function(response)
            {
                $scope.missionGuide = response.data;
            });

    });
