// This file contains all necessary definitions for widget-nibbles-viewer
(function() {
  'use strict';

  // Controller for generic error handling.
  angular.module('frontend.board')
    .directive('widgetNibblesViewer', [
      function directive() {
        return {
          restrict: 'A',
          scope: {},
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-nibbles-viewer/widget.html',
          controller: [
            '$scope', '$sce',
            function controller($scope, $sce) {
                $scope.url = $sce.trustAsResourceUrl("http://hackday-sites.protacon.com/ai-nibbles-monitor/");
            }
          ]
        };
      }
    ])
  ;
}());
