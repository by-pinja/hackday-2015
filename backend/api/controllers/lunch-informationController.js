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
        restaurant: 'Shalimar',
        city: 'Jyväskylä',
        method: 'fetchShalimar'
      },
      {
        restaurant: 'Asemaravintola',
        city: 'Jyväskylä',
        method: 'fetchAsema'
      },
      {
        restaurant: 'Trattoria',
        city: 'Jyväskylä',
        method: 'fetchTrattoria'
      },
      {
        restaurant: 'Best',
        city: 'Jyväskylä',
        method: 'fetchBest'
      },
      {
        restaurant: 'Dynamo',
        city: 'Jyväskylä',
        method: 'fetchDynamo'
      },
      {
        restaurant: 'Antell',
        city: 'Tampere',
        method: 'fetchAntell'
      },
      {
        restaurant: 'Kirveli',
        city: 'Tampere',
        method: 'fetchKirveli'
      },
      {
        restaurant: 'Coriander',
        city: 'Tampere',
        method: 'fetchCoriander'
      }
    ];

    // Fetch all restaurant data
    async.map(
      restaurants,
      function runner(restaurant, callback) {
        sails.services.lunch[restaurant.method](function (error, result) {
          restaurant.lunch = result;

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
