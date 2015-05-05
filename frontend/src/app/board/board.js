// Generic models angular module initialize.
(function() {
  'use strict';

  angular.module('frontend.board', []);

  // Module configuration
  angular.module('frontend.board')
    .config([
      '$stateProvider',
      function config($stateProvider) {
        $stateProvider
          .state('board', {
            parent: 'frontend',
            url: '/board',
            views: {
              'content@': {
                templateUrl: '/frontend/board/partials/index.html',
                controller: 'BoardController'
              }
            }
          })
        ;
      }
    ])
  ;
}());