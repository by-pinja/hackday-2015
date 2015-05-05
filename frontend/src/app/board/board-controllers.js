/**
 * This file contains all necessary Angular controller definitions for 'frontend.board' module.
 *
 * Note that this file should only contain controllers and nothing else.
 */
(function() {
  'use strict';

  // Main dashboard controller
  angular.module('frontend.board')
    .controller('BoardController', [
      '$scope',
      'widgetDefinitions', 'defaultWidgetDefinitions',
      function controller(
        $scope,
        widgetDefinitions, defaultWidgetDefinitions
      ) {
        $scope.dashboardOptions = {
          storageId: 'hack-vision',
          storage: localStorage,
          storageHash: 'hack-vision',
          hideWidgetName: true,
          widgetDefinitions: widgetDefinitions,
          defaultWidgets: defaultWidgetDefinitions,
          defaultLayouts: [
            {
              title: 'Hackday',
              active: true,
              defaultWidgets: defaultWidgetDefinitions
            }
          ],
          settingsModalOptions: {
            templateUrl: '/frontend/board/partials/widget-settings.html'
          }
        };
      }
    ])
  ;
}());
