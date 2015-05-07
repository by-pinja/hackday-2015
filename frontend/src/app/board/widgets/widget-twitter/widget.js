// This file contains all necessary for widget-protacon-twitter
(function() {
  'use strict';

  // Controller for generic error handling.
  angular.module('frontend.board')
    .directive('widgetTwitter', [
      function directive() {
        return {
          restrict: 'A',
          scope: {},
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-twitter/widget.html',
          controller: [
            '$scope',
            function controller() {
              !function(d,s,id){var
                js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

            }
          ]
        };
      }
    ])
  ;
}());
