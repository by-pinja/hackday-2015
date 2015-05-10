/**
 * This file contains all necessary Angular controller definitions for 'frontend.board' module.
 *
 * Note that this file should only contain controllers and nothing else.
 */
(function() {
  'use strict';

  // Main dashboard controller
  angular.module('frontend.toiletReservation')
    .controller('ToiletReservationController', [
      '$scope', '$modalInstance',
      '_', 'moment',
      'ToiletReservationModel',
      '_reservations',
      function controller(
        $scope, $modalInstance,
        _, moment,
        ToiletReservationModel,
        _reservations
      ) {
        $scope.canReservePee = false;
        $scope.canReservePoo = false;
        $scope.reservations = _reservations;

        var freePooSlot = null;
        var freePeeSlot = null;
        var now = moment();

        _.forEach($scope.reservations, function iterator(slot) {
          var reservationEnd = moment(slot.reservationEndTime);

          if (slot.type === 1 && reservationEnd.isBefore(now)) {
            freePeeSlot = slot;

            $scope.canReservePee = true;
          } else if (reservationEnd.isBefore(now) && slot.type === 2) {
            freePooSlot = slot;

            $scope.canReservePoo = true;
          }
        });

        $scope.reserveToilet = function(type, nakkisuoja) {
          var endTime = moment();

          if (type === 1) {
            freePeeSlot.reservationEndTime = endTime.add(2, 'minutes').toDate();
            freePeeSlot.avoidingWork = false;
            $scope.canReservePee = false;

            ToiletReservationModel.update(freePeeSlot.id, freePeeSlot);
          } else if (type === 2) {
            freePooSlot.reservationEndTime = endTime.add(7, 'minutes').toDate();
            freePooSlot.avoidingWork = nakkisuoja;
            $scope.canReservePoo = false;

            ToiletReservationModel.update(freePooSlot.id, freePooSlot);
          } else if (type === 3) {
            ToiletReservationModel
              .update(6, {
                avoidingWork: false,
                reservationEndTime: moment().add(2, 'minutes')
              })
            ;
          }

          $modalInstance.dismiss();
        };

        $scope.close = function close() {
          $modalInstance.dismiss('cancel');
        };
      }
    ])
  ;
}());
