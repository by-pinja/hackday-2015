// This file contains all necessary for widget-muster
(function() {
  'use strict';

  // Actual directive code
  angular.module('frontend.board')
    .directive('widgetMuster', [
      function directive() {
        return {
          restrict: 'A',
          scope: {},
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-muster/widget.html',
          controller: [
            '$scope', '$sce', '$http', '$window', '$timeout',
            function controller($scope, $sce, $http, $window, $timeout) {
              var musterUrl = '';

              $scope.$watch('$parent.widget.dataModelOptions.musterUrl', function watcher() {
                  // We need to set URL to be as trusted for all to work
                  musterUrl = $sce.trustAsResourceUrl($scope.$parent.widget.dataModelOptions.musterUrl);

                  _getData();
              });

              var mapOptions = {
                  disableDefaultUI: true,
                  zoom: 5,
                  panControl: false,
                  zoomControl: true,
                  scaleControl: false,
                  streetViewControl: false
              };

              var stations = [];
              var map = new $window.google.maps.Map(angular.element('#muster-map')[0], mapOptions);

              map.setCenter(new $window.google.maps.LatLng(65.143774, 26.2453809));

              $window.io.socket.on('musterInspection', function onSocketMessage(data) {
                  var stationId = parseInt(data);
                  var selectedMarker = null;

                  for (var i = 0; i < stations.length; i++) {
                    if (stations[i].Id === stationId) {
                      stations[i].marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                      stations[i].marker.setAnimation($window.google.maps.Animation.BOUNCE);

                      selectedMarker = stations[i].marker;

                      var audio = new Audio('/assets/audio/sound.wav');

                      audio.play();

                      _showMarker(selectedMarker);
                    }
                  }
              });

              function _showMarker(marker) {
                $timeout(function () {
                  marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
                  marker.setAnimation(null);
                }, 900);
              }

              function _getData() {
                $http
                  .get(musterUrl)
                  .then(
                    function onSuccess(result) {
                      var data = result.data.Data;

                      stations = data;

                      for (var i = 0; i < data.length; i++) {
                        var latLng = new $window.google.maps.LatLng(data[i].CoordinateLat, data[i].CoordinateLng);

                        var marker = new $window.google.maps.Marker({
                          position: latLng,
                          map: map
                        });

                        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');

                        data[i].marker = marker;
                      }
                    }
                  )
                ;
              }
            }
          ]
        };
      }
    ])
  ;
}());
