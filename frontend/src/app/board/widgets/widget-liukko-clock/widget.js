// This file contains all necessary for widget-liukko-clock
(function() {
  'use strict';

  // Actual directive code
  angular.module('frontend.board')
    .directive('widgetLiukkoClock', [
      function directive() {
        return {
          restrict: 'A',
          scope: {},
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-liukko-clock/widget.html',
          controller: [
            '$scope', '$window',
            function controller($scope, $window) {
              $scope.initialize = function initialize() {
                $window.CoolClock.findAndCreateClocks();

                return true;
              };
            }
          ]
        };
      }
    ])
  ;
}());
