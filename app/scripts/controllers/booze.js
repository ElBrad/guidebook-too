'use strict';

/**
 * @ngdoc function
 * @name bootleggersGuideApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bootleggersGuideApp
 */
angular.module('bootleggersGuideApp')
    .controller('BoozeCtrl', function ($scope, $routeParams, $http, $window)
    {
        $scope.states = [];

        $http.get($window.location.pathname + 'booze_data.json')
            .success(function(response)
            {
                $scope.boozeData = response.data;
            });


    });
