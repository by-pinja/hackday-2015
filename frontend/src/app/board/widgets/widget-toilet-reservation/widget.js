// This file contains all necessary for widget-protacon-video
(function() {
  'use strict';

  // Controller for generic error handling.
  angular.module('frontend.board')
    .directive('widgetToiletReservation', [
      function directive() {
        return {
          restrict: 'A',
          scope: {},
          templateUrl: '/frontend/board/widgets/widget-toilet-reservation/widget.html',
          controller: [
            '$scope',
            'ToiletReservationModel',
            function controller($scope, peepooFactory) {
              $scope.reservations = [];

              window.setInterval(function() {
                peepooFactory.load().then(function(result) {
                  $scope.reservations = result;
                  $scope.$apply();
                }, function(error){
                });
              }, 2000);

              $scope.showPee = function (reservation) {
                return reservation.type === 1;
              };

              $scope.showPoo = function (reservation) {
                return reservation.type === 2 && (!reservation.avoidingWork);
              };

              $scope.isReserved = function(reservation) {
                return moment(reservation.reservationEndTime) > moment();
              }

              $scope.isAvoiding = function(reservation) {
                return (reservation.type === 2 && reservation.avoidingWork);
              }
            }
          ]
        };
      }
    ])
  ;
}());
