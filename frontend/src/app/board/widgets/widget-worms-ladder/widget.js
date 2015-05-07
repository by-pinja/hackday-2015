// This file contains all necessary for widget-worms-ladder
(function() {
  'use strict';

  // Actual directive code
  angular.module('frontend.board')
    .directive('widgetWormsLadder', [
      function directive() {
        return {
          restrict: 'A',
          scope: {
            players: '='
          },
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-worms-ladder/widget.html',
          controller: [
            '$scope',
            '_',
            'WormsLadderModel',
            'FocusOnService', 'MessageService',
            function controller(
              $scope,
              _,
              WormsLadderModel,
              FocusOnService, MessageService
            ) {
              $scope.startEdit = function startEdit(player) {
                //Do nothing if player is already under edit
                var playerUnderEdit = $scope.playerUnderEdit;
                if (playerUnderEdit && player.id == playerUnderEdit.id && player.editmode )
                  return;

                $scope.cancelAllEdits();

                $scope.playerUnderEdit = angular.copy(player);
                player.editmode = true;
                FocusOnService.focus('focusMe');
              };

              $scope.cancelAllEdits = function cancelAllEdits() {
                _.map($scope.players, $scope.cancelEdit);
              };

              $scope.cancelEdit = function cancelEdit(player) {
                player.editmode = false;
              };

              $scope.update = function update(player) {
                WormsLadderModel.update(player.id, player).then(
                  function onSuccess(result) {
                    MessageService.success('Update successful', result);
                  }
                );
                player.editmode = false;
              };

              $scope.deletePlayer = function deletePlayer(player) {
                WormsLadderModel.delete(player.id);
              };

              $scope.createPlayer = function createPlayer(player) {
                WormsLadderModel.create(player);
                $scope.cancelAllEdits();
                $scope.newPlayer = {};
              };

              $scope.shouldShowNewPlayerInputs = function shouldShowNewPlayerInputs() {
                return $scope.players
                    && $scope.players.length == 0
                  || _.any($scope.players, {"editmode": true});
              };
            }
          ]
        };
      }
    ])
  ;

  // Widget data model factory
  angular.module('frontend.board')
    .factory('WidgetWormsLadderModel', [
      'WidgetDataModel',
      'WormsLadderModel',
      '_',
      function factory(
        WidgetDataModel,
        WormsLadderModel,
        _
      ) {
        var data = [];

        function DataModel() {}

        DataModel.prototype = Object.create(WidgetDataModel.prototype);

        DataModel.prototype.init = function init() {
          var _this = this;

          WormsLadderModel
            .load()
            .then(
              function onSuccess(result) {
                data = result;

                _.map(result, function iterator(item) {
                    item.editmode = false;
                });

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
        WormsLadderModel.handlerCreated = function handlerCreated(message) {
          data.push(message.data);
        };

        // Custom handler for updated objects
        WormsLadderModel.handlerUpdated = function handlerUpdated(message) {
          var match = _.find(data, function iterator(item) {
            return item.id === message.id;
          });

          if (match) {
            _.merge(match, message.data);
          }
        };

        // Custom handler for destroyed objects
        WormsLadderModel.handlerDestroyed = function handlerDestroyed(message) {
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
    .factory('WormsLadderModel', [
      'DataModel',
      function factory(DataModel) {
        return new DataModel('worms-ladder');
      }
    ])
  ;
}());
