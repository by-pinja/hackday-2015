// This file contains all necessary for widget-worms-ladder
(function() {
  'use strict';

  // Actual directive code
  angular.module('frontend.board')
    .directive('widgetBigBrother', [
      function directive() {
        return {
          restrict: 'A',
          scope: {

          },
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-big-brother/widget.html',
          controller: [
            '$scope',
            function controller($scope) {
              $scope.title = "Big Brother 2015";

              /**
               * {
                  name: "Testiloosi",
                  people: [
                    {name: 'Tommi', in: true},
                    {name: 'Timo', in: true}
                  ]
                },
               {
                 name: "Testiloosi 2",
                 people: [
                   {name: 'Testi', in: false},
                   {name: 'Antti', in: true}
                 ]
               }*/

              $scope.rivit = [
                {loossit: [
                  {nimi: 'sauna', koko: 2},
                  {nimi: 'takaovi', 'koko': 1},
                  {nimi: 'IT', 'koko': 1},
                  {nimi: 'IT', 'koko': 1},
                  {nimi: 'IT', 'koko': 1},
                  {nimi: 'IT', 'koko': 1},
                  {nimi: 'Vallu', 'koko': 1},
                  {nimi: 'Janne', 'koko': 1},
                  {nimi: 'Olli', 'koko': 1},
                  {nimi: 'Cella', 'koko': 1}
                ]},
                {loossit: [
                  {nimi: 'saunatupa', koko: 2},
                  {nimi: 'tyhjä', 'koko': 1},
                  {nimi: 'tyhjä', 'koko': 1},
                  {nimi: 'tyhjä', 'koko': 1},
                  {nimi: 'Keski 1', 'koko': 1},
                  {nimi: 'Taukotila', 'koko': 2},
                  {nimi: 'Keski 2', 'koko': 1},
                  {nimi: 'tyhjä', 'koko': 1},
                  {nimi: 'Atrium', 'koko': 1}
                ]},
                {loossit: [
                  {nimi: 'huoneet', koko: 2},
                  {nimi: 'myynti', 'koko': 1},
                  {nimi: 'Ohjelmisto 5', 'koko': 1},
                  {nimi: 'Ohjelmisto 4', 'koko': 1},
                  {nimi: 'Ohjelmisto 3', 'koko': 1},
                  {nimi: 'Ohjelmisto 2', 'koko': 1},
                  {nimi: 'Ohjelmisto 1', 'koko': 1},
                  {nimi: 'Toimistppalvelut', 'koko': 1},
                  {nimi: 'Etuovi', 'koko': 1},
                  {nimi: 'Villa', 'koko': 1}
                ]}
              ];

              $scope.loossit = {
                'sauna': {
                  'rivi': 1
                }
              };
            }
          ]
        };
      }
    ])
  ;
}());
