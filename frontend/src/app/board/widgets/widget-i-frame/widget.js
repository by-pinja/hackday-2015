// This file contains all necessary for widget-i-frame
(function() {
  'use strict';

  // Controller for generic error handling.
  angular.module('frontend.board')
    .directive('widgetIFrame', [
      function directive() {
        return {
          restrict: 'A',
          scope: {},
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-i-frame/widget.html',
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
