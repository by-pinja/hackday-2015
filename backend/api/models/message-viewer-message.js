'use strict';

// Module dependencies
var fs = require('fs');
var _ =  require('lodash');

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
  },

  /**
   * After destroy lifecycle function, this will clean up possible files from FS.
   *
   * @param   {{}[]}      records
   * @param   {function}  next
   */
  afterDestroy: function afterDestroy(records, next) {
    /**
     * Helper function to remove (unlink) specified files from FS.
     *
     * @param   {[]}        files     Files to remove
     * @param   {function}  callback  Callback function which is called after job is done
     */
    function deleteFiles(files, callback) {
      var i = files.length;

      files.forEach(function iterator(filepath) {
        fs.unlink(filepath, function onUnlink(error) {
          i--;

          if (error) {
            callback(error);

            return;
          } else if (i <= 0) {
            callback(null);
          }
        });
      });
    }

    // Determine possible files
    var files = _.map(
      _.filter(records,
        function iterator(record) {
          return record.type === 'img';
        }
      ),
      function iterator(file) {
        return sails.config.appPath + '/uploads/messages/' + file.data
      }
    );

    // We have some files, so we need to remove those
    if (files.length > 0) {
      deleteFiles(files, next);
    } else { // Otherwise just continue
      next();
    }
  }
};
