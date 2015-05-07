// This file contains all necessary for widget-worms-ladder
(function () {
  'use strict';

  // Actual directive code
  angular.module('frontend.board')
    .directive('widgetBigBrother', [
      function directive() {
        return {
          restrict: 'A',
          scope: {},
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-big-brother/widget.html',
          controller: [
            '$scope',
            function controller($scope) {
              $scope.title = "Big Brother 2015";

              $scope.loossit = [
                {
                  name: 'sauna',type: 'sauna', people: [
                  {name: 'Testi 1', in: true},
                  {name: 'Testi 2', in: false},
                  {name: 'Testi 3', in: true}
                ]
                },
                {name: 'IT', type: 'it', 'width': 1},
                {name: 'IT', type: 'it',  'width': 1},
                {name: 'IT', type: 'it',  'width': 1},
                {name: 'IT', type: 'it',  'width': 1},
                {
                  name: 'Vallu', type: 'development',  'width': 1, people: [
                  {name: 'Tarmo', in: true},
                  {name: 'Matti', in: true}
                ]
                },
                {name: 'Janne', type: 'development', 'width': 1},
                {name: 'Olli', type: 'development', 'width': 1},
                {name: 'Cella', type: 'meeting', 'width': 1},
                {name: 'saunatupa', type: 'sauna', width: 2},
                {name: 'tyhjä', type: 'empty', 'width': 1},
                {name: 'tyhjä', type: 'empty', 'width': 1},
                {name: 'Keski 1', type: 'development', 'width': 1},
                {name: 'tyhjä', type: 'empty', 'width': 1},
                {name: 'Taukotila', type: 'break', 'width': 2},
                {
                  name: 'Keski 2', type: 'development', 'width': 1, people: [
                  {name: 'Tommi', in: true},
                  {name: 'Jaakko', in: true}
                ]
                },
                {name: 'tyhjä', type: 'empty', 'width': 1},
                {name: 'Atrium', type: 'meeting', 'width': 1},
                {name: 'huoneet', type: 'development', width: 2},
                {name: 'myynti', type: 'sale', 'width': 1},
                {name: 'Ohjelmisto 5', type: 'development', 'width': 1},
                {name: 'Ohjelmisto 4', type: 'development', 'width': 1},
                {name: 'Ohjelmisto 3', type: 'development', 'width': 1},
                {name: 'Ohjelmisto 2', type: 'development', 'width': 1},
                {name: 'Ohjelmisto 1', type: 'development', 'width': 1},
                {name: 'Toimistopalvelut', type: 'office', 'width': 1},
                {name: 'Villa', type: 'meeting', 'width': 1}
              ];
            }
          ]
        };
      }
    ])
  ;
}());
