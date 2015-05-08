// This file contains all necessary for widget-rss-reader
(function() {
  'use strict';

  // Actual directive code
  angular.module('frontend.board')
    .directive('widgetRssReader', [
      function directive() {
        return {
          restrict: 'A',
          scope: {},
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-rss-reader/widget.html',
          controller: [
            '$scope', '$http', '$interval',
            function controller(
              $scope, $http, $interval
            ) {
              $scope.getContent = function getContent(entry) {
                var output = '';

                if (entry.content && entry.content.toString().length < 300) {
                  output = entry.content;
                } else if (entry.contentSnippet) {
                  output = entry.contentSnippet;
                } else {
                  output = entry.title;
                }

                return output;
              };

              $scope.$watch('$parent.widget.dataModelOptions.feedUrl', function watcher() {
                $scope.fetch();
              });

              $scope.fetch = function fetch() {
                var _this = this;
                var options = _this.$parent.widget.dataModelOptions;

                $http
                  .jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + options.feedItems + '&callback=JSON_CALLBACK&q=' + encodeURIComponent(options.feedUrl))
                  .then(
                    function onSuccess(results) {
                      $scope.data = results.data;
                    }
                  )
                ;
              };

              $scope.refresh = function refresh() {
                var _this = this;

                $interval.cancel($scope.intervalPromise);

                $scope.intervalPromise = $interval(function interval() {
                  $scope.fetch();
                }, _this.dataModelOptions.refreshInterval * 60 * 1000);
              };
            }
          ]
        };
      }
    ])
  ;
}());

