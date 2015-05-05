'use strict';

/**
 * 400 (Bad Request) response handler.
 *
 * Usage:
 *  return res.badRequest();
 *  return res.badRequest(data);
 *
 * @param   {{}}  data  Data for response
 * @returns {*}
 */
module.exports = function badRequest(data) {
  // Get access to `req`, `res`, & `sails`
  var request = this.req;
  var response = this.res;
  var sails = request._sails;

  // Log response
  if (data !== undefined) {
    sails.log.verbose('Sending 400 ("Bad Request") response: \n', data);
  } else {
    sails.log.verbose('Sending empty 400 ("Bad Request") response');
  }

  // Set status code
  response.status(400);

  // Backend will always response JSON
  return response.jsonx(data);
};
