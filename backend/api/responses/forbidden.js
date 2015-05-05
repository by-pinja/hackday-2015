'use strict';

/**
 * 403 (Forbidden) response handler.
 *
 * Usage:
 *  return res.forbidden();
 *  return res.forbidden(data);
 *
 * @param   {{}}  data    Data for response
 * @returns {*}
 */
module.exports = function forbidden(data) {
  // Get access to `req`, `res`, & `sails`
  var request = this.req;
  var response = this.res;
  var sails = request._sails;

  // Log response
  if (data !== undefined) {
    sails.log.verbose('Sending 403 ("Forbidden") response: \n', data);
  } else {
    sails.log.verbose('Sending empty 403 ("Forbidden") response');
  }

  // Set status code
  response.status(403);

  // Backend will always response JSON
  return response.jsonx(data);
};
