'use strict';

/**
 * 404 (Not Found) response handler.
 *
 * Usage:
 *  return res.notFound();
 *  return res.notFound(data);
 *
 * NOTE:
 *  If a request doesn't match any explicit routes (i.e. `config/routes.js`) or route blueprints (i.e. "shadow routes",
 *  Sails will call `res.notFound()` automatically.
 *
 * @param   {{}}  data    Data for response
 * @returns {*}
 */
module.exports = function notFound(data) {
  // Get access to `req`, `res`, & `sails`
  var request = this.req;
  var response = this.res;
  var sails = request._sails;

  // Log response
  if (data !== undefined) {
    sails.log.verbose('Sending 404 ("Not Found") response: \n', data);
  } else {
    sails.log.verbose('Sending empty 404 ("Not Found") response');
  }

  // Set status code
  response.status(404);

  // Backend will always response JSON
  return response.jsonx(data);
};
