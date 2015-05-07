// Backend (sails.js) data model factory
(function() {
    'use strict';

    angular.module('frontend.toiletReservation')
        .factory('ToiletReservationModel', [
            'DataModel',
            function factory(DataModel) {
                return new DataModel('toiletReservation');
            }
        ]);
}());