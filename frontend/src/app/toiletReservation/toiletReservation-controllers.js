/**
 * This file contains all necessary Angular controller definitions for 'frontend.board' module.
 *
 * Note that this file should only contain controllers and nothing else.
 */
(function () {
    'use strict';

    // Main dashboard controller
    angular.module('frontend.toiletReservation')
        .controller('ToiletReservationController', [
            '_',
            'ToiletReservationModel',
            '$scope',
            function controller(_,
                ToiletReservationModel,
                $scope) {

                $scope.canReservePee = false;
                $scope.canReservePoo = false;

                var freePooSlot = null;
                var freePeeSlot = null;

                ToiletReservationModel
                    .load()
                    .then(
                    function onSuccess(result) {
                        var now = moment();
                        console.log(result);

                        _.forEach(result, function(slot) {

                            var reservationEnd = moment(slot.reservationEndTime);

                            if (slot.type === 1 && reservationEnd.isBefore(now))
                            {
                                freePeeSlot = slot;
                                $scope.canReservePee = true;
                            } else if (reservationEnd.isBefore(now) && slot.type === 2) {
                                freePooSlot = slot;
                                $scope.canReservePoo = true;
                            }
                        });
                    }
                );

                $scope.reserveToilet = function(type, nakkisuoja) {
                    var endTime = moment();

                    if (type === 1) {
                        freePeeSlot.reservationEndTime = endTime.add(2, 'minutes').toDate();
                        ToiletReservationModel.update(freePeeSlot.id, freePeeSlot);
                        $scope.canReservePee = false;
                    } else if (type === 2) {
                        freePooSlot.reservationEndTime = endTime.add(7, 'minutes').toDate();
                        ToiletReservationModel.update(freePooSlot.id, freePooSlot);
                        $scope.canReservePoo = false;
                    }
                };

                $scope.reserveDouble = function() {
                  ToiletReservationModel.update(6, {id: 6, avoidingWork:false, reservationEndTime: moment().add(2, 'minutes')});
                }
            }
        ])
    ;
}());
