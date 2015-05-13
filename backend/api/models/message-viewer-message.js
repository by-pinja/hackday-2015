'use strict';

/**
 * message-viewer-message.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {
  schema: true,

  attributes: {
    type: {
      type: 'string',
      required: true,
      enum: ['img', 'msg', 'url']
    },
    data: {
      type: 'string',
      required: true,
      notEmpty: true
    },
    sender: {
      type: 'string',
      required: true,
      notEmpty: true
    },
    active: {
      type: 'boolean',
      required: true,
      defaultsTo: true
    }
  }
};
