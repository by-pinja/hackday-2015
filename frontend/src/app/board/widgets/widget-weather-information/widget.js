// This file contains all necessary for widget-weather-information
(function() {
  'use strict';

  // Actual directive code
  angular.module('frontend.board')
    .directive('widgetWeatherInformation', [
      function directive() {
        return {
          restrict: 'A',
          scope: {},
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-weather-information/widget.html',
          controller: [
            '$scope', '$interval','$http', '$q',
            function controller(
              $scope, $interval, $http, $q
            ) {
              $scope.locations = [];

              $scope.$watch('$parent.widget.dataModelOptions.selected', function watcher() {
                $scope.fetch();
              });

              $scope.fetch = function fetch() {
                var locations = _.words(this.$parent.widget.dataModelOptions.selected);

                var promises = _.map(locations, function iterator(location) {
                  return $http
                    .get('http://api.openweathermap.org/data/2.5/find?units=metric&q=' + location)
                    .then(
                      function onSuccess(result) {
                        return result.data.list[0];
                      }
                    )
                  ;
                });

                $q
                  .all(promises)
                  .then(
                    function onSuccess(results) {
                      $scope.locations = results;

                      $scope.refresh();
                    }
                  )
                ;
              };

              $scope.refresh = function refresh() {
                $interval.cancel($scope.intervalPromise);

                $scope.intervalPromise = $interval(function interval() {
                  $scope.fetch();
                }, 5 * 60 * 1000);
              };

              $scope.getWindSpeedRotation = function getWindSpeedRotation(wind) {
                var rotate = 'rotate(' + Math.floor(wind.deg - 45) + 'deg)';

                return {
                  '-ms-transform': rotate,
                  '-webkit-transform': rotate,
                  'transform': rotate
                };
              }
            }
          ]
        };
      }
    ])
  ;
}());
