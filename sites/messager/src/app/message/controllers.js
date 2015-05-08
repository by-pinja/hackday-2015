angular
  .module('messager.message')
  .controller('MessageController',
    ['$scope', '$http',
    function ($scope, $http) {
        'use strict';

        $scope.types = [
            {
                type: 'msg',
                label: 'Message'
            }, {
                type: 'img',
                label: 'Image'
            }/*, {
                type: 'url',
                label: 'Url'
            }*/];

        $scope.sendMessage = function () {
            // TODO url from conf
                $http.post(window.messageApp.sailsUrl + '/message-viewer-message',
                    {
                        type: $scope.type,
                        data: $scope.message,
                        sender: $scope.sender
                    }
                );
        };
      }
    ]);
