// This file contains all necessary for widget-protacon-video
(function() {
  'use strict';

  // Actual directive code
  angular.module('frontend.board')
    .directive('widgetProtaconVideo', [
      function directive() {
        return {
          restrict: 'A',
          scope: {},
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-protacon-video/widget.html',
          controller: [
            '$scope',
            function controller($scope) {
              $scope.videoId = 'VUyNmZAYTwk';

              $scope.playerOptions =  {
                controls: 1,
                autoplay: 1,
                autohide: 1
              };

              $scope.$on('youtube.player.ended', function watcher($event, player) {
                // play it again
                player.playVideo();
              });
            }
          ]
        };
      }
    ])
  ;
}());
