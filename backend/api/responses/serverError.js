'use strict';

/**
 * 500 (Server Error) Response
 *
 * Usage:
 *  return res.serverError();
 *  return res.serverError(data);
 *
 * NOTE:
 *  If something throws in a policy or controller, or an internal error is encountered, Sails will call
 *  `res.serverError()` automatically.
 *
 * @param   {{}}  data    Data for response
 * @returns {*}
 */
module.exports = function serverError(data) {
  // Get access to `req`, `res`, & `sails`
  var req = this.req;
  var res = this.res;
  var sails = req._sails;

  // Log response
  if (data !== undefined) {
    sails.log.error('Sending 500 ("Server Error") response: \n', data);
  } else {
    sails.log.error('Sending empty 500 ("Server Error") response');
  }

  // Set status code
  res.status(500);

  // Backend will always response JSON
  return res.jsonx(data);
};
