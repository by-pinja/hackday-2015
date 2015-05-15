// This file contains all necessary for widget-lunch-information
(function() {
  'use strict';

  // Actual directive code
  angular.module('frontend.board')
    .directive('widgetLunchInformation', [
      function directive() {
        return {
          restrict: 'A',
          scope: {
            places: '='
          },
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-lunch-information/widget.html'
        };
      }
    ])
  ;

  // Widget data model factory
  angular.module('frontend.board')
    .factory('WidgetLunchInformationModel', [
      '$http', '$interval',
      'BackendConfig',
      'WidgetDataModel',
      function factory(
        $http, $interval,
        BackendConfig,
        WidgetDataModel
      ) {
        function DataModel() {}

        DataModel.prototype = Object.create(WidgetDataModel.prototype);

        DataModel.prototype.init = function init() {
          var _this = this;

          _this.fetchData();
        };

        DataModel.prototype.destroy = function destroy() {
          var _this = this;

          $interval.cancel(_this.intervalUpdate);

          WidgetDataModel.prototype.destroy.call(_this);
        };

        DataModel.prototype.fetchData = function fetchData() {
          var _this = this;

          // Cancel possible parallel interval
          $interval.cancel(_this.intervalUpdate);

          $http
            .get(BackendConfig.url + '/lunch-information')
            .then(
              function onSuccess(result) {
                // Update scope value
                _this.updateScope(result.data);

                // Create new interval to fetch lunch data from backend
                _this.intervalUpdate = $interval(function interval() {
                  _this.fetchData();
                }, 15 * 60 * 1000);
              }
            )
          ;
        };

        return DataModel;
      }
    ])
  ;
}());
