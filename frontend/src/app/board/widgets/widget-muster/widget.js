// This file contains all necessary for widget-protacon-video
(function() {
  'use strict';

  // Controller for generic error handling.
  angular.module('frontend.board')
    .directive('widgetMuster', [
      function directive() {
        return {
          restrict: 'A',
          scope: {},
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-muster/widget.html',
          controller: [
            '$scope', '$http',
            function controller($scope, $http) {

                var mapOptions = {
                    disableDefaultUI: true,
                    zoom: 5,
                    panControl: false,
                    zoomControl: true,
                    scaleControl: false,
                    streetViewControl: false
                };


                var stations = [];

                var map = new google.maps.Map($("#muster-map")[0], mapOptions);

                map.setCenter(new google.maps.LatLng(65.143774, 26.2453809));

                io.socket.on('musterInspection', function (data) {
                    var stationId = parseInt(data);

                    var selectedMarker = null;
                    for (var i = 0; i < stations.length; i++) {
                        if (stations[i].Id === stationId) {
                            stations[i].marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')
                            stations[i].marker.setAnimation(google.maps.Animation.BOUNCE);

                            selectedMarker = stations[i].marker;

                            var audio = new Audio('/assets/audio/sound.wav');
                            audio.play();

                            setTimeout(function () {
                                selectedMarker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png')
                                selectedMarker.setAnimation(null);
                            }, 900);
                        }
                    }
                });

                getData();

                function getData() {
                    $http.get('http://baja12-kika.protacon.com/Baja.Web/SystemStatus/GetMapItems').then(function (result) {
                        var data = result.data.Data;

                        stations = data;
                        for (var i = 0; i < data.length; i++) {
                            var latLng = new google.maps.LatLng(data[i].CoordinateLat, data[i].CoordinateLng);

                            var marker = new google.maps.Marker({
                                position: latLng,
                                map: map
                            });
                            marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png')

                            data[i].marker = marker;
                        }
                    });
                }
            }
          ]
        };
      }
    ])
  ;
}());
