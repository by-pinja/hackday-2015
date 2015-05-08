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
              defaultWidgets: [
                {
                  name: 'Protacon video'
                }
              ]
            },
            {
              title: 'Jypanttimo',
              active: false,
              defaultWidgets: [
                {
                  name: 'Message of the Day'
                },
                {
                  name: 'Coffee Status'
                }
              ]
            },
            {
              title: 'BB',
              active: false,
              defaultWidgets: [
                {
                  name: 'Big Brother 2015'
                }
              ]
            },
            {
              title: 'Pökö',
              active: false,
              defaultWidgets: [
                {
                  name: 'LiukkoClock'
                },
                {
                  name: 'Toilet reservation',
                  size: {
                    width: '600px'
                  }
                }
              ]
            },
            {
              title: 'Hops hill',
              active: false,
              defaultWidgets: [
                {
                  name: 'Protacon twitter feed'
                }
              ]
            },
            {
              title: 'RB',
              active: false,
              defaultWidgets: [
                {
                  name: 'RSS reader'
                },
                {
                  name: 'Worms Ladder'
                },
                {
                  name: 'URL viewer'
                },
                {
                  name: 'Weather Information'
                }
              ]
            },
            {
              title: 'Nibbles',
              active: false,
              defaultWidgets: [
                {
                  name: 'Nibbles viewer'
                }
              ]
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
