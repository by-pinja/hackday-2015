// This file contains all necessary for widget-protacon-video
(function() {
  'use strict';

  // Controller for generic error handling.
  angular.module('frontend.board')
    .factory('peepooFactory', [function() {
      return {
        reservations : [
          {"type":"Poo", reserved:false},
          {"type":"Pee", reserved:true},
          {"type":"Poo", reserved:false},
          {"type":"Poo", reserved: true},
          {"type":"Pee", reserved:true},
          {"type":"Poo", reserved: true}
        ]
      }
    }])
    .directive('widgetToiletReservation', [
      function directive() {
        return {
          restrict: 'A',
          scope: {},
          templateUrl: '/frontend/board/widgets/widget-toilet-reservation/widget.html',
          controller: [
            '$scope',
            'peepooFactory',
            function controller($scope, peepooFactory) {
              $scope.reservations = peepooFactory.reservations;

              $scope.showPee = function (type) {
                return type === "Pee"
              };

              $scope.showShit = function (type) {
                return type === "Poo"
              };
            }
          ]
        };
      }
    ])
  ;
}());
