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
            '$scope',
            '$http',
            'BackendConfig',
            '$interval',
            function controller($scope, $http, BackendConfig, $interval) {

              /**
               * Initial data schema
               *
               * @type {*[]}
               */
              $scope.loossit = [
                {name: "Sauna", width: 2, type: 'sauna', people: [
                  {"direction":"2","name":"Mynttinen Jari","time":"2015-05-06 16:04:00","usename":"jmy","id":"248"}
                ]},
                {
                  name: "IT", width: 2, type: 'it', people: [
                  {
                    "id": "547",
                    "direction": "0",
                    "usename": "arni",
                    "name": "Niemel\u00e4inen Ari",
                    "time": "2015-05-07 13:01:00"
                  },
                  {
                    "id": "419",
                    "direction": "0",
                    "usename": "rop",
                    "name": "Rosenstr\u00f6m Petri",
                    "time": "2015-05-07 11:27:00"
                  },
                  {
                    "id": "379",
                    "direction": "2",
                    "usename": "hbj",
                    "name": "Bj\u00f6rkman Henri",
                    "time": "2015-05-07 14:40:00"
                  },
                ]
                },
                {
                  name: "TUKI", width: 2, type: 'tuki', people: [
                  {
                    "id": "444",
                    "direction": "2",
                    "usename": "niku",
                    "name": "Kuokka Niko",
                    "time": "2015-05-06 15:38:00"
                  },
                  {
                    "id": "417",
                    "direction": "2",
                    "usename": "mla",
                    "name": "Laitinen Miia",
                    "time": "2015-05-07 12:19:00"
                  },
                ]
                },

                {
                  name: "Vallu", width: 1, type: 'normal', people: [
                  {
                    "id": "344",
                    "direction": "2",
                    "usename": "male",
                    "name": "Lehtinen Matti",
                    "time": "2015-05-07 11:34:00"
                  },
                  {
                    "id": "313",
                    "direction": "2",
                    "usename": "sko",
                    "name": "Konttinen Seppo",
                    "time": "2015-05-07 11:04:00"
                  },
                  {
                    "id": "275",
                    "direction": "2",
                    "usename": "tle",
                    "name": "Lepp\u00e4nen Tarmo",
                    "time": "2015-05-07 14:44:00"
                  },
                ]
                },
                {
                  name: "Hallinto", width: 1, type: 'normal', people: [
                  {
                    "id": "238",
                    "direction": "2",
                    "usename": "opo",
                    "name": "Porkholm Olli",
                    "time": "2015-05-06 14:50:00"
                  },
                  {
                    "id": "40",
                    "direction": "2",
                    "usename": "jmhr",
                    "name": "Hakala-Ranta Janne",
                    "time": "2015-05-07 11:34:00"
                  }
                ]
                },
                {name: "Cella", width: 1, type: 'meeting', people: []},

                {name: "Saunatupa", width: 2, type: 'sauna', people: []},
                {
                  name: "Laitisen poppoo", width: 1, type: 'normal', people: [
                  {
                    "id": "113",
                    "direction": "2",
                    "usename": "tila",
                    "name": "Laitinen Timo",
                    "time": "2015-05-07 13:34:00"
                  }
                ]
                },
                {name: "KAHVITILA", width: 3, type: 'lounge', people: []},
                {
                  name: "Tiimij.", width: 1, type: 'teamleaders', people: [
                  {
                    "id": "358",
                    "direction": "2",
                    "usename": "jaka",
                    "name": "Kaski Jaakko",
                    "time": "2015-05-07 14:50:00"
                  },
                  {
                    "id": "190",
                    "direction": "2",
                    "usename": "sato",
                    "name": "S\u00e4rkk\u00e4 Tommi",
                    "time": "2015-05-07 11:21:00"
                  }
                ]
                },
                {name: "Atrium", width: 1, type: 'meeting', people: []},

                {name: "Huoneet", width: 1, type: 'rooms', people: []},
                {
                  name: "Myynti", width: 1, type: 'normal', people: [
                  {
                    "id": "418",
                    "direction": "2",
                    "usename": "koj",
                    "name": "Ojala Kari",
                    "time": "2015-05-06 16:20:00"
                  },
                  {
                    "id": "345",
                    "direction": "2",
                    "usename": "illa",
                    "name": "Laitinen Ilkka",
                    "time": "2015-05-07 13:54:00"
                  },
                ]
                },
                {
                  name: "Muster", width: 1, type: 'normal', people: [
                  {
                    "id": "420",
                    "direction": "2",
                    "usename": "anhu",
                    "name": "Humalam\u00e4ki Antti",
                    "time": "2015-05-07 14:42:00"
                  },
                ]
                },
                {
                  name: "Cargo", width: 1, type: 'normal', people: [
                  {
                    "id": "531",
                    "direction": "2",
                    "usename": "vti",
                    "name": "Tielinen Vili",
                    "time": "2015-05-07 13:33:00"
                  },
                  {
                    "id": "507",
                    "direction": "2",
                    "usename": "tho",
                    "name": "Holopainen Tanja",
                    "time": "2015-05-07 07:55:00"
                  },
                  {
                    "direction": "2",
                    "name": "Ristinen Sami",
                    "time": "2015-05-07 11:34:00",
                    "usename": "risa",
                    "id": "213"
                  }
                ]
                },
                {
                  name: "Anna", width: 1, type: 'normal', people: [
                  {
                    "id": "480",
                    "direction": "2",
                    "usename": "hehe",
                    "name": "Heikkinen Heikki",
                    "time": "2015-05-07 11:34:00"
                  },
                  {
                    "id": "430",
                    "direction": "2",
                    "usename": "juko",
                    "name": "Koutonen Jussi",
                    "time": "2015-05-07 10:54:00"
                  },
                ]
                },
                {
                  name: "Palola", width: 1, type: 'normal', people: [
                  {
                    "id": "648",
                    "direction": "2",
                    "usename": "tpa",
                    "name": "Palola Timo",
                    "time": "2015-05-07 13:40:00"
                  },
                ]
                },
                {
                  name: "Veera", width: 1, type: 'normal', people: [
                  {
                    "id": "563",
                    "direction": "2",
                    "usename": "vha",
                    "name": "Hasala Veera ",
                    "time": "2015-05-04 15:20:00"
                  },
                  {
                    "id": "184",
                    "direction": "2",
                    "usename": "lije",
                    "name": "Rossi Jenni",
                    "time": "2015-05-07 11:10:00"
                  },
                  {
                    "id": "450",
                    "direction": "2",
                    "usename": "ane",
                    "name": "Nevala Antti ",
                    "time": "2015-05-06 17:17:00"
                  },
                ]
                },
                {
                  name: "Vast.", width: 1, type: 'normal', people: [
                  {
                    "id": "59",
                    "direction": "2",
                    "usename": "tsli",
                    "name": "Liukko Timo",
                    "time": "2015-05-07 08:25:00"
                  },

                ]
                },
                {name: "Villa", width: 1, type: 'normal', people: []}
              ];

              var stop;

              /**
               * make a new update request to server every 10 seconds
               */
              stop = $interval(function () {
                $http.get(BackendConfig.url + '/inHouse').success(function (data) {


                  //Update scope data employee state and times
                  $.each($scope.loossit, function (number, loossi) {
                    $.each(loossi.people, function (index, person) {
                      for (var i = 0, max = data.length; i < max; ++i) {
                        if (data[i].id == person.id) {

                          $scope.loossit[number].people[index] = data[i];
                          data.splice(i, 1);
                          break;
                        }
                      }
                    })
                  });

                  //all employees are accounted for
                  if (data.length == 0) return;

                  //assume personel without designated place to be on a coffee break
                  $.each($scope.loossit, function (number, loossi) {
                    if (loossi.type == 'lounge') {

                      $scope.loossit[number].people = data;
                      return;
                    }
                  });

                });
              }, 10000, false);


              $scope.$on('$destroy', function () {
                if (angular.isDefined(stop)) {
                  $interval.cancel(stop);
                  stop = undefined;
                }
              });
            }
          ]
        };
      }
    ])
  ;
}());
