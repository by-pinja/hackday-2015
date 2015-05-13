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
            '$scope',
            'BackendConfig',
            function controller(
              $scope,
              BackendConfig
            ) {
              /**
               * Helper function to get backend image url.
               *
               * @param   {{}}  image
               * @returns {string}
               */
              $scope.getImageUrl = function getImageUrl(image) {
                return BackendConfig.url + '/message-viewer-message/showImage?image=' + image.data;
              }
            }
          ]
        };
      }
    ])
  ;

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
    ])
  ;

  angular.module('frontend.board')
    .controller('MessageAdminController', [
      '$scope', '$modalInstance',
      'Upload',
      'BackendConfig',
      'MessageViewerModel',
      '_messages',
      function controller(
        $scope, $modalInstance,
        Upload,
        BackendConfig,
        MessageViewerModel,
        _messages
      ) {
        // Store messages
        $scope.messages = _messages;

        // Specify message types
        $scope.messageTypes = [
          {
            value: 'msg',
            name: 'Message'
          },
          {
            value: 'img',
            name: 'Image'
          },
          {
            value: 'url',
            name: 'URL'
          }
        ];

        $scope.$watch('newMessage.type', function() {
          $scope.noFilesSelected = false;

          $scope.$broadcast('show-errors-reset');
        });

        /**
         * Helper function to get backend image url.
         *
         * @param   {{}}  image
         * @returns {string}
         */
        $scope.getImageUrl = function getImageUrl(image) {
          return BackendConfig.url + '/message-viewer-message/showImage?image=' + image.data;
        };

        $scope.getImageTooltip = function getImageTooltip(image) {
          return '<img src="' + $scope.getImageUrl(image) + '" class="tooltip-image" />';
        };

        /**
         * Function to remove specified message from database and GUI.
         *
         * @param   {{}}  message
         */
        $scope.remove = function remove(message) {
          MessageViewerModel
            .delete(message.id)
            .then(
              function onSuccess() {
                var index = $scope.messages.indexOf(message);

                $scope.messages.splice(index, 1);
              }
            )
          ;
        };

        /**
         * Function to changed specified message status information.
         *
         * @param   {{}}  message
         */
        $scope.toggleActive = function toggleActive(message) {
          var data = angular.copy(message);

          data.active = !data.active;

          MessageViewerModel
            .update(message.id, data)
            .then(
              function onSuccess(result) {
                var index = $scope.messages.indexOf(message);

                $scope.messages.splice(index, 1);
                $scope.messages.splice(index, 0, result.data);
              }
            )
          ;
        };

        /**
         * Function to submit new message to backend. Note that 'msg' and 'url' message types are created directly
         * via 'MessageViewerModel' (sails blueprints API) and 'img' type is made via custom action which handles
         * actual file upload process.
         */
        $scope.submit = function submit() {
          $scope.$broadcast('show-errors-check-validity');

          // Oh noes, form isn't valid => cannot continue
          if (!$scope.messageForm.$valid) {
            return;
          }

          switch ($scope.newMessage.type) {
            case 'msg':
            case 'url':
              MessageViewerModel
                .create($scope.newMessage)
                .then(
                  function onSuccess(result) {
                    $scope.messages.push(result.data);

                    $scope.reset();
                  }
                )
              ;
              break;
            case 'img':
              $scope.noFilesSelected = !!(!_.isArray($scope.newMessage.files) || $scope.newMessage.files.length === 0);

              // Yeah, all seems to be fine for actual upload
              if (!$scope.noFilesSelected) {
                _upload($scope.newMessage)
                  .then(
                    function onSuccess(result) {
                      $scope.messages.push(result.data);

                      $scope.reset();
                    }
                  )
                ;
              }
              break;
          }
        };

        /**
         * Helper function to 'reset' current new message form. This is called on following cases:
         *  1) On controller start
         *  2) On success submit
         */
        $scope.reset = function reset() {
          $scope.newMessage = {
            type: 'msg',
            sender: null,
            data: null,
            files: null
          };

          $scope.$broadcast('show-errors-reset');
        };

        // Simple close method for modal
        $scope.close = function close() {
          $modalInstance.dismiss('cancel');
        };

        $scope.reset();

        /**
         * Helper function to make actual image upload action to backend.
         *
         * @param   {{}}        formData
         * @returns {*|Promise}
         * @private
         */
        var _upload = function _upload(formData) {
          return Upload
            .upload({
              url: BackendConfig.url + '/message-viewer-message/uploadImage',
              file: formData.files[0],
              method: 'POST',
              fields: {
                type: formData.type,
                sender: formData.sender
              }
            })
          ;
        };
      }
    ])
  ;
}());
