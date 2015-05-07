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
                        var now = moment();//.add(-moment().utcOffset(), 'minutes');

                        console.log(result);
                        console.log(now.format("YYYY-MM-DD hh:mm:ss"));

                        _.forEach(result, function(slot) {

                            var reservationEnd = moment(slot.reservationEndTime);
                            console.log(reservationEnd.format("YYYY-MM-DD hh:mm:ss"));
                            console.log(reservationEnd.isBefore(now));

                            if (slot.type === 1 && reservationEnd.isBefore(now))
                            {
                                freePeeSlot = slot;
                                $scope.canReservePee = true;
                            } else if (reservationEnd.isBefore(now)) {
                                freePooSlot = slot;
                                $scope.canReservePoo = true;
                            }
                        });

                        console.log(freePeeSlot);
                        console.log(freePooSlot);
                    }
                );

                $scope.reserveToilet = function(type) {
                    var endTime = moment();

                    if (type === 1) {
                        freePeeSlot.reservationEndTime = endTime.add(2, 'minutes').toDate();
                        ToiletReservationModel.update(freePeeSlot.id, freePeeSlot);
                        $scope.canReservePee = false;
                    } else {
                        freePooSlot.reservationEndTime = endTime.add(7, 'minutes').toDate();
                        ToiletReservationModel.update(freePooSlot.id, freePooSlot);
                        $scope.canReservePoo = false;
                    }
                };
            }
        ])
    ;
}());
