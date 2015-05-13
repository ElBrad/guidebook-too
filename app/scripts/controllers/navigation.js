'use strict';

/**
 * @ngdoc function
 * @name bootleggersGuideApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the bootleggersGuideApp
 */
angular.module('bootleggersGuideApp')
  .controller('NavCtrl', function ($scope)
  {
      $scope.openChatApp = function()
      {
          if (document.referrer.search("chat.html") < 1)
          {
              window.location = "./chat.html";
          }

      };


      $scope.isChatClosed = function()
      {
          return (document.referrer.search("chat.html") < 1);
      };

  });
