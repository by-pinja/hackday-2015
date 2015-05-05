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
          directive: 'widget-i-frame',
          settingsModalOptions: {
            partialTemplateUrl: '/frontend/board/widgets/widget-i-frame/settings.html'
          },
          dataModelOptions: {
            url: 'http://wunder.sytes.net/'
          }
        },
        {
          name: 'Worms Ladder',
          directive: 'widget-worms-ladder',
          dataAttrName: 'players',
          dataModelType: 'WidgetWormsLadderModel'
        },
        {
          name: 'Protacon video',
          directive: 'widget-protacon-video',
          containerClass: 'widget-no-resize'
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
