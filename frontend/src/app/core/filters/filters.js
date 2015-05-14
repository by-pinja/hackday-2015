// Generic models angular module initialize.
(function() {
  'use strict';

  angular.module('frontend.core.filters', []);

  angular.module('frontend.core.filters')
    .filter('htmlLinky', [
      '$sanitize',
      'linkyFilter',
      function(
        $sanitize,
        linkyFilter
      ) {
        var ELEMENT_NODE = 1;
        var TEXT_NODE = 3;
        var linkifiedDOM = document.createElement('div');
        var inputDOM = document.createElement('div');

        var linkify = function linkify(startNode) {
          var i, ii, currentNode;

          for (i = 0, ii = startNode.childNodes.length; i < ii; i++) {
            currentNode = startNode.childNodes[i];

            switch (currentNode.nodeType) {
              case ELEMENT_NODE:
                linkify(currentNode);
                break;
              case TEXT_NODE:
                linkifiedDOM.innerHTML = linkyFilter(currentNode.textContent, '_blank');
                i += linkifiedDOM.childNodes.length - 1;

                while(linkifiedDOM.childNodes.length) {
                  startNode.insertBefore(linkifiedDOM.childNodes[0], currentNode);
                }

                startNode.removeChild(currentNode);
                break;
            }
          }

          return startNode;
        };

        return function(input) {
          inputDOM.innerHTML = input;

          return linkify(inputDOM).innerHTML;
        };
      }
    ])
  ;

  /**
   * Simple filter to remove all HTML tags from specified text. Usage example:
   *
   *  <span>{{someHtmlData | htmlToPlaintext}}</span>
   */
  angular.module('frontend.core.filters')
    .filter('htmlToPlaintext', function filter() {
      return function transform(text) {
        return angular.element(text).text();
      };
    })
  ;
}());
