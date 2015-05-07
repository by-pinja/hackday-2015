'use strict';

/**
 * VFTestController
 *
 * @description :: Server-side logic for managing Vftests
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
    index: function index(request, response) {
        sails.services.restapi.makeRequest('inhouse', {}, function callback(error, data) {
            if (error) {
                response.negotiate(error);
            } else {
                response.ok(data);
            }
        });
    }
};

