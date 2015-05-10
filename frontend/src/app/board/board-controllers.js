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
      '$scope', '$modal',
      'widgetDefinitions', 'defaultWidgetDefinitions',
      function controller(
        $scope, $modal,
        widgetDefinitions, defaultWidgetDefinitions
      ) {
        $scope.actionItems = [
          {
            title: 'Go to toilet',
            action: $scope.openToilet
          }
        ];

        $scope.openToilet = function openToilet() {
          $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: '/frontend/toiletReservation/partials/index.html',
            controller: 'ToiletReservationController',
            size: 'sm',
            resolve: {
              _reservations: [
                'ToiletReservationModel',
                function(ToiletReservationModel) {
                  return ToiletReservationModel
                    .load()
                  ;
                }
              ]
            }
          });
        };

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
                  name: 'Toilet reservation'
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
            },
            {
              title: 'Muster',
              active: false,
              defaultWidgets: [
                {
                  name: 'Muster map'
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
