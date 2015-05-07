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
                {name: "Sauna", width: 2, type: 'sauna', people: []},
                {name: "IT", width: 2, type: 'it', people: []},
                {name: "TUKI", width: 2, type: 'tuki', people: []},

                {name: "Vallu", width: 1, type: 'normal', people: []},
                {name: "Hallinto", width: 1, type: 'normal', people: []},
                {name: "Cella", width: 1, type: 'meeting', people: []},

                {name: "Saunatupa", width: 2, type: 'sauna', people: []},
                {name: "Laitisen poppoo", width: 1, type: 'normal', people: []},
                {name: "KAHVITILA", width: 3, type: 'lounge', people: []},
                {name: "Tiimij.", width: 1, type: 'teamleaders', people: []},
                {name: "Atrium", width: 1, type: 'meeting', people: []},

                {name: "Huoneet", width: 1, type: 'rooms', people: []},
                {name: "Myynti", width: 1, type: 'normal', people: []},
                {name: "Muster", width: 1, type: 'normal', people: []},
                {name: "Cargo", width: 1, type: 'normal', people: []},
                {name: "Anna", width: 1, type: 'normal', people: []},
                {name: "Palola", width: 1, type: 'normal', people: []},
                {name: "Veera", width: 1, type: 'normal', people: []},
                {name: "Vast.", width: 1, type: 'normal', people: []},
                {name: "Villa", width: 1, type: 'normal', people: []}
              ];
            }
          ]
        };
      }
    ])
  ;
}());
