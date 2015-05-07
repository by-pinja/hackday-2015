// This file contains all necessary for widget-weather-information
(function() {
  'use strict';

  // Actual directive code
  angular.module('frontend.board')
    .directive('widgetWeatherInformation', [
      function directive() {
        return {
          restrict: 'A',
          scope: { },
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-weather-information/widget.html',
          controller: [
            '$scope',
            function controller(
              $scope
            ){

            }
          ]
        };
      }
    ])
  ;

  // Widget data model factory
  angular.module('frontend.board')
    .factory('WidgetWeatherInformationModel', [
      'WidgetDataModel', '_',
      function factory(
        WidgetDataModel,
        _
      ) {
        var data = [];

        function DataModel() {}

        DataModel.prototype = Object.create(WidgetDataModel.prototype);

        DataModel.prototype.init = function init() {
          var _this = this;
        };

        DataModel.prototype.destroy = function destroy() {
          var _this = this;

          WidgetDataModel.prototype.destroy.call(_this);
        };

        return DataModel;
      }
    ])
  ;

  // Backend (sails.js) data model factory
  angular.module('frontend.board')
    .factory('WeatherInformationModel', [
      'DataModel',
      function factory(DataModel) {
        return new DataModel('weather-information');
      }
    ])
  ;
}());
