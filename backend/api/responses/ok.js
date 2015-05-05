'use strict';

/**
 * 200 (OK) response handler.
 *
 * Usage:
 *  return res.ok();
 *  return res.ok(data);
 *
 * @param   {{}}  data    Data for response
 * @returns {*}
 */
module.exports = function sendOK(data) {
  // Get access to `req`, `res`, & `sails`
  var request = this.req;
  var response = this.res;
  var sails = request._sails;

  // Log response
  if (data !== undefined) {
    sails.log.verbose('Sending 200 ("OK") response: \n', data);
  } else {
    sails.log.verbose('Sending empty 200 ("OK") response');
  }

  // Set status code
  response.status(200);

  // Backend will always response JSON
  return response.jsonx(data);
};
