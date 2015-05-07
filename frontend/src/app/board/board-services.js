/**
 * This file contains all necessary Angular services definitions for 'frontend.board' module.
 *
 * Note that this file should only contain services and nothing else.
 */
(function() {
  'use strict';

  // Widget definitions service
  angular.module('frontend.board')
    .factory('widgetDefinitions', function factory() {
      return [
        {
          name: 'URL viewer',
          directive: 'widget-url-viewer',
          settingsModalOptions: {
            partialTemplateUrl: '/frontend/board/widgets/widget-url-viewer/settings.html'
          },
          dataModelOptions: {
            url: 'http://www.protacon.com/'
          }
        },
        {
          name: 'Worms Ladder',
          directive: 'widget-worms-ladder',
          dataAttrName: 'players',
          dataModelType: 'WidgetWormsLadderModel'
        },
        {
          name: 'Coffee Status',
          directive: 'widget-coffee-scale',
          dataAttrName: 'coffee_pots',
          dataModelType: 'widgetCoffeeScaleModel'
        },
        {
          name: 'Protacon video',
          directive: 'widget-protacon-video',
          enableVerticalResize: false
        }
      ];
    })
  ;

  // Default widget definitions service
  angular.module('frontend.board')
    .factory('defaultWidgetDefinitions', function factory() {
      return [
        {
          name: 'Protacon video'
        }
      ];
    })
  ;
}());
