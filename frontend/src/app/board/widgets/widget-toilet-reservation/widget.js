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
            '$rootScope',
            function controller($scope, peepooFactory, $rootScope) {
              $scope.reservations = [];

              peepooFactory.load().then(function(result) {
                result.forEach(function(x) {
                  console.log(x);
                  $scope.reservations.push(x);
                })
              }, function(error){

              });
              window.setInterval(function() {
                $rootScope.$apply();
              }, 1000);

              $scope.showPee = function (reservation) {
                return reservation.type === 1;
              };

              $scope.showPoo = function (reservation) {
                return reservation.type === 2 && (!reservation.avoidingWork || $scope.isReserved(reservation));
              };

              $scope.isReserved = function(reservation) {
                return moment(reservation.reservationEndTime) > moment();
              }

              $scope.isAvoiding = function(reservation) {
                return (reservation.type === 2 && reservation.avoidingWork && !$scope.isReserved(reservation));
              }
            }
          ]
        };
      }
    ])
  ;
}());
