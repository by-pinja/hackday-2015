// This file contains all necessary for widget-protacon-video
(function() {
  'use strict';

  // Controller for generic error handling.
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
            function controller(
              $scope,
              moment
            ) {

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

        // Custom handler for updated objects
        ToiletReservationModel.handlerUpdated = function handlerUpdated(message) {
          var match = _.find(data, function iterator(item) {
            return item.id === message.id;
          });

          if (match) {
            _.merge(match, message.data);
          }
        };

        // Custom handler for created objects
        ToiletReservationModel.handlerCreated = function handlerCreated(message) {
          data.push(message.data);
        };

        return DataModel;
      }
    ])
  ;

  // Backend (sails.js) data model factory
  angular.module('frontend.board')
    .factory('ToiletReservationModel', [
      'DataModel',
      function factory(DataModel) {
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
