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

                $scope.canReservePee = true;
                $scope.canReservePoo = true;

                var slots = [];

                ToiletReservationModel
                    .load()
                    .then(
                    function onSuccess(result) {
                        var now = moment();

                        slots = result;

                        _.forEach(result, function(slot) {

                            var reservationEnd = moment(slot.reservationEndTime);

                            if (slot.type === 1 && reservationEnd <= now)
                            {
                                $scope.canReservePee = true;
                            } else (reservationEnd <= now)
                            {
                                $scope.canReservePoo = true;
                            }
                        });
                    }
                );

                $scope.reserveToilet = function(type) {
                    var endTime = moment();

                    if (type === 1) {
                        ToiletReservationModel.create({index: 0, type: 1, reservationEndTime: endTime.add(7, 'minutes').toDate()});

                        $scope.canReservePee = false;
                    } else {
                        $scope.canReservePoo = false;
                    }
                };
            }
        ])
    ;
}());
