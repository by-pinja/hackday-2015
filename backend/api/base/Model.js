'use strict';

/**
 * api/base/model.js
 *
 * Base model for all sails.js models. This just contains some common code that every "nearly" every model uses.
 */
module.exports = {
  schema: true,

  attributes: {
    // Dynamic model data attributes

    // Created timestamp as moment object
    createdAtObject: function() {
      return (this.createdAt && this.createdAt != '0000-00-00 00:00:00')
        ? sails.services.date.convertDateObjectToUtc(this.createdAt) : null;
    },
    // Updated timestamp as moment object
    updatedAtObject: function() {
      return (this.updatedAt && this.updatedAt != '0000-00-00 00:00:00')
        ? sails.services.date.convertDateObjectToUtc(this.updatedAt) : null;
    }
  }
};
