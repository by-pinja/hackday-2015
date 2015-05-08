(function() {
  'use strict';

  // Controller for generic error handling.
  angular.module('frontend.board')
    .directive('widgetMessageViewer', [
      function directive() {
        return {
          restrict: 'A',
          scope: {
            messages: '='
          },
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-msg-viewer/widget.html',
          controller: [
            '$scope','MessageViewerModel',
            function controller($scope, MessageViewerModel) {

            }
          ]
        };
      }
    ])
  ;
}());

// Widget data model factory
angular.module('frontend.board')
  .factory('widgetMessageViewerModel', [
    'WidgetDataModel',
    'MessageViewerModel',
    '_',
    function factory(
      WidgetDataModel,
      MessageViewerModel,
      _
    ) {
      var data = [];

      function DataModel() {}

      DataModel.prototype = Object.create(WidgetDataModel.prototype);

      DataModel.prototype.init = function init() {
        var _this = this;

        MessageViewerModel
          .load()
          .then(
          function onSuccess(result) {
            data = result;

            _this.updateScope(result);
          }
        )
        ;
      };




      DataModel.prototype.destroy = function destroy() {
        var _this = this;

        WidgetDataModel.prototype.destroy.call(_this);
      };

      // Custom handler for created objects
      MessageViewerModel.handlerCreated = function handlerCreated(message) {
        data.push(message.data);
      };


// Custom handler for updated objects
      MessageViewerModel.handlerUpdated = function handlerUpdated(message) {
        var match = _.find(data, function iterator(item) {
          return item.id === message.id;
        });

        if (match) {
          _.merge(match, message.data);
        }
      };


      // Custom handler for destroyed objects
      MessageViewerModel.handlerDestroyed = function handlerDestroyed(message) {
        _.remove(data, function iterator(item) {
          return item.id === message.id;
        });
      };

      return DataModel;
    }
  ])
;

// Backend (sails.js) data model factory
angular.module('frontend.board')
  .factory('MessageViewerModel', [
    'DataModel',
    function factory(DataModel) {
      return new DataModel('message-viewer-message');
    }
  ]);
