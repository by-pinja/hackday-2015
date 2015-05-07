// This file contains all necessary for widget-protacon-video
(function() {
  'use strict';

  // Controller for generic error handling.
  angular.module('frontend.board')
    .factory('poopooFactory', [function() {
      return {
        reservations : [
          {"Type":"Shit"},
          {"Type":"Pee"},
          {"Type":"Shit"},
          {"Type":"Shit"}
        ]
      }
    }])
    .directive('widgetToiletReservation', [
      function directive() {
        return {
          restrict: 'A',
          scope: {},
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-toilet-reservation/widget.html',
          controller: [
            '$scope',
            'poopooFactory',
            function controller($scope, poopooFactory) {
              $scope.reservations = poopooFactory.reservations;

              $scope.showPee = function (type) {
                return type === "Pee"
              };

              $scope.showShit = function (type) {
                return type === "Shit"
              };
            }
          ]
        };
      }
    ])
  ;
}());
