// Backend (sails.js) data model factory
(function() {
    'use strict';

    angular.module('frontend.toiletReservation')
        .factory('ToiletReservationModel', [
            'DataModel',
            '_',
            function factory(DataModel, _) {
                var factory = new DataModel('toiletReservation');

                var addOrUpdate = function(existing, id, type) {
                  if(_.some(existing, {id:id})) {
                    //factory.update(id, {id: id, type: type, avoidingWork: false, reservationEndTime: new Date()});
                  }
                  else {
                    factory.create({id: id, type: type, avoidingWork: false, reservationEndTime: new Date()});
                  }
                };

                // Custom handler for updated objects
                factory.handlerUpdated = function handlerUpdated(message) {
                  console.log("updated!!!");
                  var match = _.find(data, function iterator(item) {
                    return item.id === message.id;
                  });

                  if (match) {
                    _.merge(match, message.data);
                  }
                };

                var loadInitials = function() {
                  factory.load().then(function(result){
                    console.log(result);

                    addOrUpdate(result, 1, 2);
                    addOrUpdate(result, 2, 2);
                    addOrUpdate(result, 3, 2);
                    addOrUpdate(result, 4, 2);
                    addOrUpdate(result, 5, 1);

                  }, function (err) {
                    console.log(err);
                  })
                };

                loadInitials();

              return new DataModel('toiletReservation');
            }
        ])
        .factory('InitialDataToiletReservationFactory', [
          'DataModel',
          '_',
          function factory(DataModel, _) {
            var factory = new DataModel('toiletReservation');

            var addOrUpdate = function(existing, id, type) {
              if(_.some(existing, {id:id})) {
                console.log("Updating")
                //factory.update(id, {id: id, type: type, avoidingWork: false, reservationEndTime: new Date()});
              }
              else {
                console.log("Creating")
                factory.create({id: id, type: type, avoidingWork: false, reservationEndTime: new Date()});
              }
            };

            var loadInitials = function() {
              factory.load().then(function(result){
                console.log(result);

                addOrUpdate(result, 1, 2);
                addOrUpdate(result, 2, 2);
                addOrUpdate(result, 3, 2);
                addOrUpdate(result, 4, 2);
                addOrUpdate(result, 5, 1);

              }, function (err) {
                console.log(err);
              })
            }

            return {
              loadInitials : loadInitials
            }
          }
      ]);
}());
