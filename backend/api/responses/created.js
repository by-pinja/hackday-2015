'use strict';

/**
 * 201 (Created) response handler.
 *
 * Usage:
 *  return res.created();
 *  return res.created(data);
 *
 * @param   {{}}  data  Data for response
 * @returns {*}
 */
module.exports = function created(data) {
  // Get access to `req`, `res`, & `sails`
  var request = this.req;
  var response = this.res;
  var sails = request._sails;

  // Log response
  if (data !== undefined) {
    sails.log.verbose('Sending 201 ("Created") response: \n', data);
  } else {
    sails.log.verbose('Sending empty 201 ("Created") response');
  }

  // Set status code
  response.status(201);

  // Backend will always response JSON
  return response.jsonx(data);
};
