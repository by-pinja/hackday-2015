// This file contains all necessary for widget-url-viewer
(function() {
  'use strict';

  // Actual directive code
  angular.module('frontend.board')
    .directive('widgetUrlViewer', [
      function directive() {
        return {
          restrict: 'A',
          scope: {},
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-url-viewer/widget.html',
          controller: [
            '$scope', '$sce',
            function controller($scope, $sce) {
              // Watcher for URL setting
              $scope.$watch('$parent.widget.dataModelOptions.url', function watcher() {
                // We need to set URL to be as trusted for all to work
                $scope.url = $sce.trustAsResourceUrl($scope.$parent.widget.dataModelOptions.url);
              });
            }
          ]
        };
      }
    ])
  ;
}());
