// This file contains all necessary for widget-worms-ladder
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
            'DataService',
            function controller($scope, DataService) {

              console.log(DataService);


              $scope.loossit = [
                {name: "Sauna", width: 2, type: 'sauna', people: []},
                {name: "IT", width: 2, type: 'it', people: [
                  {
                    "id": "547",
                    "direction": "1",
                    "usename": "arni",
                    "name": "Niemel\u00e4inen Ari",
                    "time": "2015-05-07 13:01:00"
                  },
                  {
                    "id": "419",
                    "direction": "1",
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
                ]},
                {name: "TUKI", width: 2, type: 'tuki', people: [
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
                ]},

                {name: "Vallu", width: 1, type: 'normal', people: [
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
                    "direction": "1",
                    "usename": "tle",
                    "name": "Lepp\u00e4nen Tarmo",
                    "time": "2015-05-07 14:44:00"
                  },
                ]},
                {name: "Hallinto", width: 1, type: 'normal', people: [
                  {
                    "id": "238",
                    "direction": "1",
                    "usename": "opo",
                    "name": "Porkholm Olli",
                    "time": "2015-05-06 14:50:00"
                  },
                  {
                    "id": "40",
                    "direction": "1",
                    "usename": "jmhr",
                    "name": "Hakala-Ranta Janne",
                    "time": "2015-05-07 11:34:00"
                  }
                ]},
                {name: "Cella", width: 1, type: 'meeting', people: []},

                {name: "Saunatupa", width: 2, type: 'sauna', people: []},
                {name: "Laitisen poppoo", width: 1, type: 'normal', people: [
                  {
                    "id": "113",
                    "direction": "1",
                    "usename": "tila",
                    "name": "Laitinen Timo",
                    "time": "2015-05-07 13:34:00"
                  }
                ]},
                {name: "KAHVITILA", width: 3, type: 'lounge', people: [
                  {
                    "id": "660",
                    "direction": "2",
                    "usename": "havi",
                    "name": "Viinikainen Hannu",
                    "time": "2015-04-14 12:42:00"
                  },
                  {
                    "id": "659",
                    "direction": "2",
                    "usename": "uka",
                    "name": "Kauppila Ulla ",
                    "time": "2015-04-14 12:42:00"
                  },
                  {
                    "id": "649",
                    "direction": "1",
                    "usename": "jako",
                    "name": "Kosonen Jarkko",
                    "time": "2015-05-07 13:15:00"
                  },
                  {
                    "id": "646",
                    "direction": "2",
                    "usename": "jap",
                    "name": "Puttonen Jarmo",
                    "time": "2015-05-07 14:00:00"
                  },
                  {
                    "id": "644",
                    "direction": "2",
                    "usename": "juhy",
                    "name": "Hyt\u00f6nen Jussi",
                    "time": "2015-05-06 16:05:00"
                  },
                  {
                    "id": "640",
                    "direction": "1",
                    "usename": "rgy",
                    "name": "Gylden Riku",
                    "time": "2015-05-06 16:31:00"
                  },
                  {
                    "id": "641",
                    "direction": "2",
                    "usename": "rre",
                    "name": "Renko Roni",
                    "time": "2015-05-07 12:38:00"
                  },
                  {
                    "id": "620",
                    "direction": "2",
                    "usename": "jyle",
                    "name": "Leinonen Jyri",
                    "time": "2015-05-05 07:04:00"
                  },
                  {
                    "id": "612",
                    "direction": "2",
                    "usename": "joka",
                    "name": "Karttunen Joel",
                    "time": "2015-05-07 11:09:00"
                  },
                  {
                    "id": "610",
                    "direction": "2",
                    "usename": "hmu",
                    "name": "Murtonen Henri",
                    "time": "2015-05-07 13:52:00"
                  },
                  {
                    "id": "613",
                    "direction": "2",
                    "usename": "pika",
                    "name": "Kapanen Pirita",
                    "time": "2015-04-30 14:43:00"
                  },
                  {
                    "id": "619",
                    "direction": "2",
                    "usename": "pepa",
                    "name": "Parikka Petteri",
                    "time": "2015-04-15 19:27:45"
                  },
                  {
                    "id": "616",
                    "direction": "2",
                    "usename": "asi",
                    "name": "Sinisalo Aleksi",
                    "time": "2015-05-07 13:13:10"
                  },
                  {
                    "id": "607",
                    "direction": "2",
                    "usename": "toka",
                    "name": "Kaura-aho Tommi ",
                    "time": "2015-05-07 08:01:00"
                  },
                  {
                    "id": "606",
                    "direction": "2",
                    "usename": "jalm",
                    "name": "Alm Joose",
                    "time": "2015-05-05 17:54:00"
                  },
                  {
                    "id": "608",
                    "direction": "2",
                    "usename": "mvi",
                    "name": "Vilpas Mika",
                    "time": "2015-05-07 11:12:00"
                  },
                  {
                    "id": "604",
                    "direction": "1",
                    "usename": "ako",
                    "name": "Kojo Antti",
                    "time": "2015-05-07 12:16:40"
                  },
                  {
                    "id": "603",
                    "direction": "2",
                    "usename": "hak",
                    "name": "Koskinen Harri ",
                    "time": "2015-05-07 11:01:00"
                  },
                  {
                    "id": "600",
                    "direction": "2",
                    "usename": "mjo",
                    "name": "Jokela Marko ",
                    "time": "2015-05-07 11:41:00"
                  },
                  {
                    "id": "569",
                    "direction": "2",
                    "usename": "nika",
                    "name": "K\u00e4rkk\u00e4inen Niko",
                    "time": "2015-05-07 14:11:00"
                  },
                  {
                    "id": "559",
                    "direction": "2",
                    "usename": "juhko",
                    "name": "Koskinen Juha",
                    "time": "2015-05-07 11:33:00"
                  },
                  {
                    "id": "562",
                    "direction": "2",
                    "usename": "tula",
                    "name": "Lassila Tuomas",
                    "time": "2015-05-07 11:25:00"
                  },
                  {
                    "id": "557",
                    "direction": "2",
                    "usename": "mpo",
                    "name": "Poikonen Mika",
                    "time": "2015-05-07 08:26:00"
                  },
                  {
                    "id": "553",
                    "direction": "2",
                    "usename": "sah",
                    "name": "Ahonen Sami ",
                    "time": "2015-05-07 12:47:00"
                  },
                  {
                    "id": "546",
                    "direction": "2",
                    "usename": "sajo",
                    "name": "Jokela Sami",
                    "time": "2015-04-13 15:05:00"
                  },
                  {
                    "id": "538",
                    "direction": "1",
                    "usename": "jel",
                    "name": "Eloranta Juha",
                    "time": "2015-05-07 08:42:00"
                  },
                  {
                    "id": "516",
                    "direction": "2",
                    "usename": "hjni",
                    "name": "Niemi Heikki-Jussi",
                    "time": "2015-05-07 08:55:00"
                  },
                  {
                    "id": "494",
                    "direction": "2",
                    "usename": "vipe",
                    "name": "Pelho Ville",
                    "time": "2015-05-07 14:35:00"
                  },
                  {
                    "id": "513",
                    "direction": "2",
                    "usename": "ara",
                    "name": "Rapa Antti",
                    "time": "2015-05-07 11:23:00"
                  },
                  {
                    "id": "514",
                    "direction": "2",
                    "usename": "tte",
                    "name": "Teiss Taaniel ",
                    "time": "2015-05-07 11:35:21"
                  },
                  {
                    "id": "495",
                    "direction": "2",
                    "usename": "suta",
                    "name": "Tarkkanen Suvi",
                    "time": "2015-05-06 11:16:00"
                  },
                  {
                    "id": "502",
                    "direction": "2",
                    "usename": "psa",
                    "name": "Savolainen Pekka ",
                    "time": "2015-05-07 11:10:00"
                  },
                  {
                    "id": "505",
                    "direction": "2",
                    "usename": "mipu",
                    "name": "Pulkkinen Mikko",
                    "time": "2015-05-07 14:01:00"
                  },
                  {
                    "id": "475",
                    "direction": "2",
                    "usename": "iku",
                    "name": "Kupiainen Ilkka",
                    "time": "2015-05-07 11:11:00"
                  },
                  {
                    "id": "429",
                    "direction": "1",
                    "usename": "kika",
                    "name": "Kasurinen Kimmo",
                    "time": "2015-05-07 08:52:00"
                  },
                  {
                    "id": "422",
                    "direction": "2",
                    "usename": "hevi",
                    "name": "Virtanen Henri",
                    "time": "2015-05-07 12:19:00"
                  },
                  {
                    "id": "376",
                    "direction": "2",
                    "usename": "miha",
                    "name": "Hakkarainen Mika",
                    "time": "2015-05-07 06:34:00"
                  },
                  {
                    "id": "319",
                    "direction": "2",
                    "usename": "ska",
                    "name": "Kauranen Sami",
                    "time": "2015-05-07 08:02:00"
                  },
                  {
                    "id": "274",
                    "direction": "1",
                    "usename": "phe",
                    "name": "Heimonen Petri",
                    "time": "2015-05-07 14:22:00"
                  },
                  {
                    "id": "256",
                    "direction": "1",
                    "usename": "olk",
                    "name": "Kalmari Olli",
                    "time": "2015-05-07 12:53:00"
                  },
                  {
                    "id": "257",
                    "direction": "1",
                    "usename": "oll",
                    "name": "Lajunen Olli",
                    "time": "2015-04-17 12:32:00"
                  },
                  {
                    "id": "248",
                    "direction": "2",
                    "usename": "jmy",
                    "name": "Mynttinen Jari",
                    "time": "2015-05-06 16:04:00"
                  },

                  {
                    "id": "213",
                    "direction": "1",
                    "usename": "risa",
                    "name": "Ristinen Sami",
                    "time": "2015-05-07 11:34:00"
                  },
                  {
                    "id": "212",
                    "direction": "1",
                    "usename": "laula",
                    "name": "Laukkarinen Lauri",
                    "time": "2015-05-07 11:37:00"
                  },
                  {
                    "id": "156",
                    "direction": "0",
                    "usename": "anko",
                    "name": "Koittola Anssi",
                    "time": "2015-05-07 14:29:00"
                  },
                  {
                    "id": "117",
                    "direction": "1",
                    "usename": "mhs",
                    "name": "Hast Masi",
                    "time": "2015-04-24 16:27:00"
                  }
                ]},
                {name: "Tiimij.", width: 1, type: 'teamleaders', people: [
                  {
                    "id": "358",
                    "direction": "1",
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
                ]},
                {name: "Atrium", width: 1, type: 'meeting', people: []},

                {name: "Huoneet", width: 1, type: 'rooms', people: []},
                {name: "Myynti", width: 1, type: 'normal', people: [
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
                ]},
                {name: "Muster", width: 1, type: 'normal', people: [
                  {
                    "id": "420",
                    "direction": "2",
                    "usename": "anhu",
                    "name": "Humalam\u00e4ki Antti",
                    "time": "2015-05-07 14:42:00"
                  },
                ]},
                {name: "Cargo", width: 1, type: 'normal', people: [
                  {
                    "id": "531",
                    "direction": "1",
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
                ]},
                {name: "Anna", width: 1, type: 'normal', people: [
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
                ]},
                {name: "Palola", width: 1, type: 'normal', people: [
                  {
                    "id": "648",
                    "direction": "2",
                    "usename": "tpa",
                    "name": "Palola Timo",
                    "time": "2015-05-07 13:40:00"
                  },
                ]},
                {name: "Veera", width: 1, type: 'normal', people: [
                  {
                    "id": "563",
                    "direction": "2",
                    "usename": "vha",
                    "name": "Hasala Veera ",
                    "time": "2015-05-04 15:20:00"
                  },
                  {
                    "id": "184",
                    "direction": "1",
                    "usename": "lije",
                    "name": "Rossi Jenni",
                    "time": "2015-05-07 11:10:00"
                  },
                  {
                    "id": "450",
                    "direction": "1",
                    "usename": "ane",
                    "name": "Nevala Antti ",
                    "time": "2015-05-06 17:17:00"
                  },
                ]},
                {name: "Vast.", width: 1, type: 'normal', people: [
                  {
                    "id": "59",
                    "direction": "2",
                    "usename": "tsli",
                    "name": "Liukko Timo",
                    "time": "2015-05-07 08:25:00"
                  },

                ]},
                {name: "Villa", width: 1, type: 'normal', people: []}
              ];
            }
          ]
        };
      }
    ])
  ;
}());
