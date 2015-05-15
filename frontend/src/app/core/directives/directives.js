// Generic models angular module initialize.
(function() {
  'use strict';

  angular.module('frontend.core.directives', []);

  angular.module('frontend.core.directives')
    .directive('widgetLoader', function directive() {
      return {
        restrict: 'E',
        scope: {
          model: '='
        },
        replace: true,
        templateUrl: '/frontend/core/directives/partials/widget-loader.html',
        link: function link(scope, element, attributes) {
          var widget = element.closest('.widget').addClass('loader-activated');

          var loader = element.prependTo(element.closest('.widget-content').parent().parent());

          loader.css({
            left: (widget.width() - 64) / 2,
            top: (widget.height() - 64) / 2
          });

          scope.$watch('model', function(valueNew, valueOld) {
            if (valueNew && valueNew !== valueOld) {
              widget.removeClass('loader-activated');

              loader.remove();
            }
          });
        }
      };
    })
  ;
}());
