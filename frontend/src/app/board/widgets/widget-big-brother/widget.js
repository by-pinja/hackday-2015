// This file contains all necessary for widget-big-brother
(function () {
  'use strict';

  // Actual directive code
  angular.module('frontend.board')
    .directive('widgetBigBrother', [
      function directive() {
        return {
          restrict: 'A',
          scope: {},
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-big-brother/widget.html',
          controller: [
            '$scope', '$http', '$interval',
            '_', 'moment',
            'BBDataService',
            function controller(
              $scope, $http, $interval,
              _, moment,
              BBDataService
            ) {
              $scope.getPersonClass = function getPersonClass(person) {
                var output = 'btn-default';

                if (person.inHouse) {
                  if (person.direction === 1) {
                    output = 'btn-success';
                  } else if (person.direction === 2) {
                    output = 'btn-danger';
                  }
                }

                return output;
              };

              $scope.getPersonTooltip = function getPersonTooltip(person) {
                var presentText = 'viimeksi talossa ' +
                  person.time.format('DD.MM.') +
                  ' klo ' +
                  person.time.format('HH:mm')
                ;

                if (person.inHouse) {
                  if (person.direction === 1) {
                    presentText = 'on tällä hetkellä talossa';
                  } else if (person.direction === 2) {
                    presentText = 'on tällä hetkellä ulkona';
                  }
                }

                return person.name + ' (' + person.username + ') <br />' + presentText;
              };

              $scope.getLoossiTooltip = function getLoossiTooltip(persons) {
                return _.pluck(persons, 'name').sort().join('<br />');
              };

              $scope.canShowPersons = function canShowPersons(loossi) {
                var limit = 0;

                if (loossi.width === 1) {
                  limit = 6;
                } else if (loossi.width === 2) {
                  limit = 18;
                } else if (loossi.width === 3) {
                  limit = 24;
                }

                return (loossi.peoplePresent.length <= limit);
              };

              $scope.loossiConfiguration = BBDataService.configuration();
              $scope.loossiData = angular.copy($scope.loossiConfiguration);

              $scope.$on('$destroy', function () {
                if (angular.isDefined($scope.intervalPromise)) {
                  $interval.cancel($scope.intervalPromise);
                }
              });

              function _fetchData() {
                BBDataService
                  .fetchData()
                  .then(
                    function(data) {
                      _parseData(data);
                      _refresh();
                    }
                  )
                ;
              }

              function _refresh() {
                $interval.cancel($scope.intervalPromise);

                $scope.intervalPromise = $interval(function interval() {
                  _fetchData();
                }, 60 * 1000);
              }

              function _parseData(data) {
                var now = new Date();

                // Determine configured persons
                var configuredPersons = _.flatten(_.pluck($scope.loossiConfiguration, 'people'));

                // Remove not configured users from data list
                data = _.filter(data, function iterator(person) {
                  return configuredPersons.indexOf(parseInt(person.id, 10)) !== -1;
                });

                // Normalize person data
                data = _.map(data, function iterator(person) {
                  person.id = parseInt(person.id, 10);
                  person.direction = parseInt(person.direction, 10);
                  person.time = moment(person.time);
                  person.inHouse = person.time.isSame(moment(), 'day');

                  return person;
                });

                // It's coffee-break!
                if ((now.getHours() === 9 || now.getHours() === 14) && now.getMinutes() < 15) {
                  $scope.loossiData = _.map($scope.loossiData, function iterator(loossi) {
                    loossi.peoplePresent = [];

                    return loossi;
                  });

                  var lounge = _.find($scope.loossiData, function iterator(loossi) {
                    return loossi.type === 'lounge';
                  });

                  // Assign all people to lounge
                  lounge.peoplePresent = data;
                } else {
                  $scope.loossiData = _.map($scope.loossiData, function iterator(loossi) {
                    loossi.peoplePresent = _.filter(data, function iterator(person) {
                      return loossi.people.indexOf(person.id) !== -1;
                    });

                    return loossi;
                  });
                }
              }

              _fetchData();
            }
          ]
        };
      }
    ])
  ;
}());
