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
          name: 'Big Brother 2015',
          directive: 'widget-big-brother',
          containerClass: 'nikotupakoimaan',
          size: {width: "1805px", height: "866px"}
        },
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
          dataAttrName: 'pots',
          dataModelType: 'widgetCoffeeScaleModel'
        },
        {
          name: 'Message viewer',
          directive: 'widget-message-viewer',
          dataAttrName: 'messages',
          dataModelType: 'widgetMessageViewerModel'
        },
        {
          name: 'Protacon video',
          directive: 'widget-protacon-video',
          enableVerticalResize: false
        },
        {
          name: 'Toilet reservation',
          directive: 'widget-toilet-reservation',
          enableVerticalResize: true
        },
        {
          name: 'Protacon twitter feed',
          directive: 'widget-twitter',
          settingsModalOptions: {
            partialTemplateUrl: '/frontend/board/widgets/widget-twitter/settings.html'
          },
          dataModelOptions: {
            widget_id: '596256646311104512'
          }
        },
        {
          name: 'LiukkoClock',
          directive: 'widget-liukko-clock',
          enableVerticalResize: false
        },
        {
          name: 'RSS reader',
          directive: 'widget-rss-reader',
          dataAttrName: 'data',
          dataModelTypeRR: 'WidgetRssReaderModel',
          dataModelOptions: {
            refreshInterval: 30,
            feedUrl: 'https://twitrss.me/twitter_user_to_rss/?user=protacon',
            feedItems: 5
          },
          settingsModalOptions: {
            partialTemplateUrl: '/frontend/board/widgets/widget-rss-reader/settings.html'
          }
        },
        {
          name: 'Weather Information',
          directive: 'widget-weather-information',
          settingsModalOptions: {
            partialTemplateUrl: '/frontend/board/widgets/widget-weather-information/settings.html'
          },
          dataModelOptions: {
            selected: 'Jyväskylä, Tampere'
          }
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
