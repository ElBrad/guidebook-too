'use strict';

/**
 * @ngdoc function
 * @name bootleggersGuideApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bootleggersGuideApp
 */
angular.module('bootleggersGuideApp')
    .controller('BoozeCtrl', function ($scope, $routeParams, $http, $filter)
    {
        $scope.states = [];

        $http.get('../booze_data.json')
            .success(function(response)
            {
                $scope.boozeData = response.data;
            });


    });
