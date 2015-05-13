(function () {
  'use strict';

  angular.module('frontend.board')
    .factory('BBDataService', [
      '$http',
      'BackendConfig',
      function factory(
        $http,
        BackendConfig
      ) {
        return {
          configuration: function configuration() {
            return [
              // First 'row'
              {
                name: 'Sauna',
                width: 1,
                type: 'meeting',
                people: [248, 257]
              },
              {
                name: '',
                width: 1,
                type: 'empty',
                people: []
              },
              {
                name: 'IT',
                width: 1,
                type: 'it',
                people: [547, 419, 379, 603, 559, 505]
              },
              {
                name: 'Service desk',
                width: 3,
                type: 'support',
                people: [640, 274, 644, 600, 156, 444, 417, 475, 248, 557, 641, 422]
              },
              {
                name: 'Vallu',
                width: 1,
                type: 'normal',
                people: [376, 546, 313, 344, 275, 513]
              },
              {
                name: 'Hallinto',
                width: 1,
                type: 'management',
                people: [40, 238]
              },
              {
                name: 'Cella',
                width: 1,
                type: 'meeting',
                people: []
              },
              // Second 'row'
              {
                name: 'Saunatupa',
                width: 1,
                type: 'meeting',
                people: []
              },
              {
                name: 'Projektipäälliköt',
                width: 1,
                type: 'management',
                people: [113]
              },
              {
                name: '',
                width: 1,
                type: 'empty',
                people: []
              },
              {
                name: 'KAHVITILA',
                width: 3,
                type: 'lounge',
                people: []
              },
              {
                name: 'Tiimivetäjät',
                width: 1,
                type: 'management',
                people: [190, 358]
              },
              {
                name: '',
                width: 1,
                type: 'empty',
                people: []
              },
              {
                name: 'Atrium',
                width: 1,
                type: 'meeting',
                people: []
              },
              // Third 'row'
              {
                name: 'Päälliköt',
                width: 1,
                type: 'management',
                people: [212, 649]
              },
              {
                name: 'Myynti',
                width: 1,
                type: 'sales',
                people: [659, 562, 418]
              },
              {
                name: 'Muster',
                width: 1,
                type: 'normal',
                people: [553, 420, 429, 319, 646]
              },
              {
                name: 'Cargo',
                width: 1,
                type: 'normal',
                people: [507, 256, 213, 607, 531]
              },
              {
                name: 'Anna',
                width: 1,
                type: 'normal',
                people: [480, 430, 345, 648, 606, 495]
              },
              {
                name: 'Elisa',
                width: 1,
                type: 'normal',
                people: [494, 608, 502, 620, 516]
              },
              {
                name: 'Veera',
                width: 1,
                type: 'normal',
                people: [563, 184, 450, 612, 610]
              },
              {
                name: 'Vastaanotto',
                width: 1,
                type: 'normal',
                people: [59, 569]
              },
              {
                name: 'Villa',
                width: 1,
                type: 'meeting',
                people: []
              }
            ];
          },
          fetchData: function fetchData() {
            return $http
              .get(BackendConfig.url + '/inHouse')
              .then(
                function onSuccess(result) {
                  return result.data;
                }
              )
            ;
          }
        };
      }
    ])
  ;
}());
