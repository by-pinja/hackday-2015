// This file contains all necessary for widget-worms-ladder
(function() {
  'use strict';

  // Actual directive code
  angular.module('frontend.board')
    .directive('widgetWormsLadder', [
      function directive() {
        return {
          restrict: 'A',
          scope: {
            players: '=players'
          },
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-worms-ladder/widget.html',
          controller: [
            '$scope',
            function controller($scope) {
              // TODO: add some controls for actual data!
            }
          ]
        };
      }
    ])
  ;

  // Widget data model factory
  angular.module('frontend.board')
    .factory('WidgetWormsLadderModel', [
      'WidgetDataModel',
      'WormsLadderModel',
      '_',
      function factory(
        WidgetDataModel,
        WormsLadderModel,
        _
      ) {
        var data = [];

        function DataModel() {}

        DataModel.prototype = Object.create(WidgetDataModel.prototype);

        DataModel.prototype.init = function init() {
          var _this = this;

          WormsLadderModel
            .load()
            .then(
              function onSuccess(result) {
                data = result;

                _this.updateScope(result);
              }
            )
          ;
        };

        DataModel.prototype.destroy = function destroy() {
          var _this = this;

          WidgetDataModel.prototype.destroy.call(_this);
        };

        // Custom handler for created objects
        WormsLadderModel.handlerCreated = function handlerCreated(message) {
          data.push(message.data);
        };

        // Custom handler for updated objects
        WormsLadderModel.handlerUpdated = function handlerUpdated(message) {
          var match = _.find(data, function iterator(item) {
            return item.id === message.id;
          });

          if (match) {
            _.merge(match, message.data);
          }
        };

        // Custom handler for destroyed objects
        WormsLadderModel.handlerDestroyed = function handlerDestroyed(message) {
          _.remove(data, function iterator(item) {
            return item.id === message.id;
          });
        };

        return DataModel;
      }
    ])
  ;

  // Backend (sails.js) data model factory
  angular.module('frontend.board')
    .factory('WormsLadderModel', [
      'DataModel',
      function factory(DataModel) {
        return new DataModel('worms-ladder');
      }
    ])
  ;
}());
