// This file contains all necessary for widget-weather-information
(function() {
  'use strict';

  // Actual directive code
  angular.module('frontend.board')
    .directive('widgetWeatherInformation', [
      function directive() {
        return {
          restrict: 'A',
          scope: {          },
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-weather-information/widget.html',
          controller: [
            '$scope',
            '$interval','$http',
            function controller(
              $scope,
              $interval,$http
            ){
              $scope.locations = [];

              $scope.$watch('$parent.widget.dataModelOptions.selected', function watcher(newValue) {
                $scope.fetch();
              });

              $scope.fetch = function(){
                var split = _.words(this.$parent.widget.dataModelOptions.selected);

                var results = [];
                var queries = _.map(split, function fetchData(item){
                  return $http.get( 'http://api.openweathermap.org/data/2.5/find?units=metric&q='+item).success(function( data ) {
                    results.push({
                      name: data.list[0].name,
                      temperature: data.list[0].main.temp
                    });

                    $scope.locations = results;
                  });
                });
              };

              $scope.startFetching = function(){
                $interval.cancel(this.intervalPromise);
                this.intervalPromise = $interval(function() {
                  _this.fetch();
                }, 100000);
              };
              }
          ]
        };
      }
    ])
  ;
}());
