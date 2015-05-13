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
          containerClass: 'nikotupakoimaan widget-no-resize',
          size: {
            width: '1900px',
            height: '680px'
          }
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
          dataModelType: 'WidgetWormsLadderModel',
          title: 'OG Worms ladders, yo',
          showTitle: true
        },
        {
          name: 'Coffee Status',
          directive: 'widget-coffee-scale',
          dataAttrName: 'pots',
          dataModelType: 'widgetCoffeeScaleModel',
          title: 'I would like to have some coffeez, plz',
          showTitle: true
        },
        {
          name: 'Message of the Day',
          directive: 'widget-message-viewer',
          dataAttrName: 'messages',
          dataModelType: 'widgetMessageViewerModel',
          title: 'Important messagez',
          showTitle: true
        },
        {
          name: 'Protacon video',
          directive: 'widget-protacon-video',
          enableVerticalResize: false
        },
        {
          name: 'Toilet reservation',
          directive: 'widget-toilet-reservation',
          enableVerticalResize: false,
          dataAttrName: 'reservations',
          dataModelType: 'WidgetToiletReservationModel',
          size: {
            width: '950px'
          },
          title: 'Toilet reservation status',
          showTitle: true
        },
        {
          name: 'Muster map',
          directive: 'widget-muster',
          enableVerticalResize: true,
          settingsModalOptions: {
              partialTemplateUrl: '/frontend/board/widgets/widget-muster/settings.html'
          },
          dataModelOptions: {
              musterUrl: 'http://baja12-kika.protacon.com/Baja.Web/SystemStatus/GetMapItems'
          },
          size: {
            height: '600px',
            width: '350px'
          },
          containerClass: 'widget-no-resize',
          title: 'Muster map',
          showTitle: true
        },
        {
          name: 'Protacon twitter feed',
          directive: 'widget-twitter',
          settingsModalOptions: {
            partialTemplateUrl: '/frontend/board/widgets/widget-twitter/settings.html'
          },
          dataModelOptions: {
            widgetId: '596256646311104512'
          },
          title: 'Protacon @ twitter',
          showTitle: true
        },
        {
          name: 'LiukkoClock',
          directive: 'widget-liukko-clock',
          enableVerticalResize: false,
          size: {
            width: '230px',
            height: '200px'
          },
          title: 'Current "time"',
          showTitle: true
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
          },
          title: 'RSS feedz',
          showTitle: true
        },
        {
            name: 'Nibbles viewer',
            directive: 'widget-nibbles-viewer',
            size: {
              height: '450px',
              width: '400px'
            },
            enableVerticalResize: false
        },
        {
          name: 'Weather Information',
          directive: 'widget-weather-information',
          settingsModalOptions: {
            partialTemplateUrl: '/frontend/board/widgets/widget-weather-information/settings.html'
          },
          dataModelOptions: {
            selected: 'Jyväskylä, Tampere, Oulu'
          },
          size: {
            width: '400px'
          },
          title: 'Sää',
          showTitle: true
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
