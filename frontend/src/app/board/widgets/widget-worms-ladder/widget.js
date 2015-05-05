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

  angular.module('frontend.board')
    .factory('WidgetWormsLadderModel', [
      'WidgetDataModel',
      'WormsLadderModel',
      function factory(
        WidgetDataModel,
        WormsLadderModel
      ) {
        function DataModel() {}

        DataModel.prototype = Object.create(WidgetDataModel.prototype);

        DataModel.prototype.init = function init() {
          var _this = this;
          var data = [];

          WormsLadderModel
            .load()
            .then(
              function onSuccess(result) {
                data = result;

                _this.updateScope(result);
              }
            )
          ;

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
        };

        DataModel.prototype.destroy = function destroy() {
          var _this = this;

          WidgetDataModel.prototype.destroy.call(_this);
        };

        return DataModel;
      }
    ])
  ;

  angular.module('frontend.board')
    .factory('WormsLadderModel', [
      'DataModel',
      function factory(DataModel) {
        return new DataModel('worms-ladder');
      }
    ])
  ;
}());
