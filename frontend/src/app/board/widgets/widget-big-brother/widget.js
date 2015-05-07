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


              $scope.loossit = [
                {
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
                }
              ];
            }
          ]
        };
      }
    ])
  ;
}());
