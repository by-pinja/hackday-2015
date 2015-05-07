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

              $scope.loossit = [
                  {name: 'sauna', width: 2, people: [
                    {name: 'Testi 1', in: true},
                    {name: 'Testi 2', in: false},
                    {name: 'Testi 3', in: true}
                  ]},
                  {name: 'IT', 'width': 1},
                  {name: 'IT', 'width': 1},
                  {name: 'IT', 'width': 1},
                  {name: 'IT', 'width': 1},
                  {name: 'Vallu', 'width': 1,  people: [
                    {name: 'Tarmo', in: true},
                    {name: 'Matti', in: true},
                    {name: 'Seppo', in: true}
                  ]},
                  {name: 'Janne', 'width': 1},
                  {name: 'Olli', 'width': 1},
                  {name: 'Cella', 'width': 1},
                  {name: 'saunatupa', width: 2},
                  {name: 'tyhjä', 'width': 1},
                  {name: 'tyhjä', 'width': 1},
                  {name: 'Keski 1', 'width': 1},
                  {name: 'tyhjä', 'width': 1},
                  {name: 'Taukotila', 'width': 2},
                  {name: 'Keski 2', 'width': 1},
                  {name: 'tyhjä', 'width': 1},
                  {name: 'Atrium', 'width': 1},
                  {name: 'huoneet', width: 2},
                  {name: 'myynti', 'width': 1},
                  {name: 'Ohjelmisto 5', 'width': 1},
                  {name: 'Ohjelmisto 4', 'width': 1},
                  {name: 'Ohjelmisto 3', 'width': 1},
                  {name: 'Ohjelmisto 2', 'width': 1},
                  {name: 'Ohjelmisto 1', 'width': 1},
                  {name: 'Toimistopalvelut', 'width': 1},
                  {name: 'Villa', 'width': 1}
              ];
            }
          ]
        };
      }
    ])
  ;
}());
