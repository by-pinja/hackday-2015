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
      '$scope', '$modal', '$timeout', '$interval',
      '_',
      'widgetDefinitions', 'defaultWidgetDefinitions',
      function controller(
        $scope, $modal, $timeout, $interval,
        _,
        widgetDefinitions, defaultWidgetDefinitions
      ) {
        $scope.rotation = false;

        $scope.openToilet = function openToilet() {
          $modal.open({
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

        $scope.openMessageAdmin = function openMessageAdmin() {
          $modal.open({
            templateUrl: '/frontend/board/widgets/widget-msg-viewer/modal.html',
            controller: 'MessageAdminController',
            size: 'lg',
            resolve: {
              _messages: [
                'MessageViewerModel',
                function(MessageViewerModel) {
                  return MessageViewerModel
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
                  name: 'Lunch information'
                },
                {
                  name: 'Worms Ladder'
                },
                {
                  name: 'Weather Information'
                },
                {
                  name: 'URL viewer'
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

        $scope.rotateInterval = null;
        $scope.timeInterval = null;
        $scope.rotationTime = 0;

        /**
         * Function to activate / de-activate layout rotation on dashboard.
         *
         * @param   {{}[]}      layouts
         * @param   {function}  changeLayout
         */
        $scope.toggleRotation = function toggleRotation(layouts, changeLayout) {
          $scope.rotation = !$scope.rotation;

          $scope.rotationTime = 0;

          // Cancel current intervals
          $interval.cancel($scope.rotateInterval);
          $interval.cancel($scope.timeInterval);

          if ($scope.rotation) {
            // Progress bar update interval
            $scope.timeInterval = $interval(function interval() {
              $scope.rotationTime++;
            }, 95);

            // Interval for actual layout change
            $scope.rotateInterval = $interval(function interval() {
              // Reset rotation time
              $scope.rotationTime = 0;

              // Determine "next" layout in layouts array
              var activeLayout = _.find(layouts, {active: true});
              var index = layouts.indexOf(activeLayout) + 1;

              // And if index is not "found" return to first index
              if (layouts[index] === undefined) {
                index = 0;
              }

              // And change layout
              changeLayout(layouts[index]);
            }, 15000);
          }
        };
      }
    ])
  ;
}());
