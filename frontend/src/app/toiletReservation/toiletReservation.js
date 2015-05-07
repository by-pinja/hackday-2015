// Generic models angular module initialize.
(function() {
  'use strict';

  angular.module('frontend.toiletReservation', []);

  // Module configuration
  angular.module('frontend.toiletReservation')
    .config([
      '$stateProvider',
      function config($stateProvider) {
        $stateProvider
          .state('toiletReservation', {
            parent: 'frontend',
            url: '/toiletReservation',
            views: {
              'content@': {
                templateUrl: '/frontend/toiletReservation/partials/index.html',
                controller: 'ToiletReservationController'
              }
            }
          })
        ;
      }
    ])
  ;
}());