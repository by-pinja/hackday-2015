// This file contains all necessary for widget-toilet-reservation
(function() {
  'use strict';

  // Actual directive code
  angular.module('frontend.board')
    .directive('widgetToiletReservation', [
      function directive() {
        return {
          restrict: 'A',
          scope: {
            reservations: '='
          },
          templateUrl: '/frontend/board/widgets/widget-toilet-reservation/widget.html',
          controller: [
            '$scope',
            'moment',
            'ToiletReservationModel',
            function controller(
              $scope,
              moment,
              ToiletReservationModel
            ) {
              ToiletReservationModel.setScope($scope, false, 'reservations');

              $scope.showPee = function showPee(reservation) {
                return reservation.type === 1;
              };

              $scope.showPoo = function showPoo(reservation) {
                return reservation.type === 2 && (!reservation.avoidingWork);
              };

              $scope.isReserved = function isReserved(reservation) {
                return moment(reservation.reservationEndTime) > moment();
              };

              $scope.showDouble = function showDouble(reservation) {
                return reservation.type === 3 && $scope.isReserved(reservation);
              };

              $scope.isAvoiding = function isAvoiding(reservation) {
                return (reservation.type === 2 && reservation.avoidingWork);
              };
            }
          ]
        };
      }
    ])
  ;

  // Widget data model factory
  angular.module('frontend.board')
    .factory('WidgetToiletReservationModel', [
      '_',
      'WidgetDataModel',
      'ToiletReservationModel',
      function factory(
        _,
        WidgetDataModel,
        ToiletReservationModel
      ) {
        var data = [];

        function DataModel() {}

        DataModel.prototype = Object.create(WidgetDataModel.prototype);

        DataModel.prototype.init = function init() {
          var _this = this;

          ToiletReservationModel
            .load()
            .then(
              function onSuccess(result) {
                data = result;

                _this.updateScope(result);
              }
            )
          ;
        };

        return DataModel;
      }
    ])
  ;

  // Backend (sails.js) data model factory
  angular.module('frontend.board')
    .factory('ToiletReservationModel', [
      '_',
      'DataModel',
      function factory(
        _,
        DataModel
      ) {
        var model = new DataModel('toiletreservation');

        var addOrUpdate = function(existing, id, type) {
          if (!_.some(existing, {id: id})) {
            model.create({id: id, type: type, avoidingWork: false, reservationEndTime: new Date()});
          }
        };

        var loadInitials = function loadInitials() {
          model
            .load()
            .then(
              function onSuccess(result) {
                addOrUpdate(result, 1, 2);
                addOrUpdate(result, 2, 2);
                addOrUpdate(result, 3, 2);
                addOrUpdate(result, 4, 2);
                addOrUpdate(result, 5, 1);
                addOrUpdate(result, 6, 3);
              }
            )
          ;
        };

        loadInitials();

        return model;
      }
    ])
  ;
}());
