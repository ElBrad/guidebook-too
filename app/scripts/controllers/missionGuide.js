'use strict';

/**
 * @ngdoc function
 * @name bootleggersGuideApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bootleggersGuideApp
 */
angular.module('bootleggersGuideApp')
    .controller('MissionGuideCtrl', function ($scope, $routeParams, $http, $filter)
    {
        $scope.mission_id = $routeParams.missionId;

        $http.get('../mission_guide.json')
            .success(function(response)
            {
                $scope.missionGuide = response.data;
            });

    });
