// This file contains all necessary for widget-protacon-video
(function() {
  'use strict';

  // Controller for generic error handling.
  angular.module('frontend.board')
    .directive('widgetCoffeeScale', [
      function directive() {
        return {
          restrict: 'A',
          scope: {},
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-coffee-scale/widget.html',
          controller: [
            '$scope','CoffeeScaleModel',
            function controller($scope, CoffeeScaleModel) {

            }
          ]
        };
      }
    ])
  ;
}());

// Widget data model factory
angular.module('frontend.board')
  .factory('widgetCoffeeScaleModel', [
    'WidgetDataModel',
    'CoffeeScaleModel',
    '_',
    function factory(
      WidgetDataModel,
      CoffeeScaleModel,
      _
    ) {
      var data = [];

      function DataModel() {}

      DataModel.prototype = Object.create(WidgetDataModel.prototype);

      DataModel.prototype.init = function init() {
        var _this = this;

        CoffeeScaleModel
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
      CoffeeScaleModel.handlerCreated = function handlerCreated(message) {
        data.push(message.data);
      };

      // Custom handler for destroyed objects
      CoffeeScaleModel.handlerDestroyed = function handlerDestroyed(message) {
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
  .factory('CoffeeScaleModel', [
    'DataModel',
    function factory(DataModel) {
      return new DataModel('coffee-scale');
    }
  ])
