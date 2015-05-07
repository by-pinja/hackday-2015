// This file contains all necessary for widget-weather-information
(function() {
  'use strict';

  // Actual directive code
  angular.module('frontend.board')
    .directive('widgetWeatherInformation', [
      function directive() {
        return {
          restrict: 'A',
          scope: {
            locations: '='
          },
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-weather-information/widget.html',
          controller: [
            '$scope',
            '_',
            function controller(
              $scope,
              _
            ){
              $scope.$watch('$parent.widget.dataModelOptions.locations', function watcher() {
                console.log($scope.$parent.widget.dataModelOptions.locations);
              },true);
            }
          ]
        };
      }
    ])
  ;

  // Widget data model factory
  angular.module('frontend.board')
    .factory('WidgetWeatherInformationModel', [
      'WidgetDataModel',
      '_',
      '$interval','$http',
      function factory(
        WidgetDataModel,
        _,
        $interval, $http
      ) {
        var data = [];

        function DataModel() {}

        DataModel.prototype = Object.create(WidgetDataModel.prototype);

        DataModel.prototype.init = function init() {
          this.fetch();
          this.startInterval();
        };

        DataModel.prototype.fetch = function fetch(){
          var _this = this;
          var split = _.words(this.dataModelOptions.locations);

          var results = [];
          var queries = _.map(split, function fetchData(item){
            return $http.get( 'http://api.openweathermap.org/data/2.5/find?units=metric&q='+item).success(function( data ) {
              results.push({
                name: data.list[0].name,
                temperature: data.list[0].main.temp
              });

              _this.updateScope(results);
            });
          });
        };


        DataModel.prototype.startInterval = function () {
          var _this = this;

          $interval.cancel(this.intervalPromise);
          this.intervalPromise = $interval(function() {
            _this.fetch();
          }, 100000);
        };

        DataModel.prototype.destroy = function destroy() {
          var _this = this;

          WidgetDataModel.prototype.destroy.call(_this);
          $interval.cancel(this.intervalPromise);
        };

        return DataModel;
      }
    ])
  ;
}());
