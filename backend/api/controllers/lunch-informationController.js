'use strict';

// Module dependencies
var async = require('async');
var _ = require('lodash');

/**
 * lunch-informationController
 *
 * @description :: Server-side logic for managing lunch-information
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
  index: function index(request, response) {
    // Specify restaurants where we want to fetch data
    var restaurants = [
      {
        name: 'Shalimar',
        city: 'Jyväskylä',
        method: 'fetchShalimar'
      },
      {
        name: 'Asemaravintola',
        city: 'Jyväskylä',
        method: 'fetchAsema'
      },
      {
        name: 'Trattoria',
        city: 'Jyväskylä',
        method: 'fetchTrattoria'
      },
      {
        name: 'Best',
        city: 'Jyväskylä',
        method: 'fetchBest'
      },
      {
        name: 'Dynamo',
        city: 'Jyväskylä',
        method: 'fetchDynamo'
      },
      {
        name: 'Antell',
        city: 'Tampere',
        method: 'fetchAntell'
      },
      {
        name: 'Kirveli',
        city: 'Tampere',
        method: 'fetchKirveli'
      },
      {
        name: 'Coriander',
        city: 'Tampere',
        method: 'fetchCoriander'
      }
    ];

    // Fetch all restaurant data
    async.map(
      restaurants,
      function runner(restaurant, callback) {
        sails.services.lunch[restaurant.method](function (error, result) {
          result = result === undefined ? '' : result;

          restaurant.lunch = result.toString().replace(/,/g, ', ');

          delete restaurant.method;

          callback(error, restaurant);
        })
      },
      function onDone(error, results) {
        if (error) {
          response.negotiate(error);
        } else {
          response.ok(results);
        }
      }
    );
  }
};
