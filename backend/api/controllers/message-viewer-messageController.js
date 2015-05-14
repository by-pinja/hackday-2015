'use strict';

// Module dependencies
var _ = require('lodash');
var fs = require('fs');
var path = require('path');

/**
 * message-viewer-messageController.js
 *
 * @description :: Server-side logic for managing worms-ladders
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = _.merge(_.cloneDeep(require('../base/Controller')), {
  /**
   * Common action to show specified image and if image is not found fallback to 'not-found' image.
   *
   * @param   {*|Request}   request
   * @param   {*|Response}  response
   */
  showImage: function showImage(request, response) {
    var imageFile = request.param('image');
    var fileSource = sails.config.appPath + '/uploads/messages/' + imageFile;

    fs.readFile(fileSource, function onRead(error, data) {
      if (error) {
        fileSource = sails.config.appPath + '/assets/not-found.png';

        fs.readFile(fileSource, function onRead(error, data) {
          if (error) {
            // TODO: send placeholder image...
            return response.negotiate(error);
          }

          response.writeHead(404, {'Content-Type': 'image/png'});
          response.end(data); // Send the file data to the browser.
        });
      } else {
        response.writeHead(200, {'Content-Type': 'image/jpeg'});
        response.end(data); // Send the file data to the browser.
      }
    });
  },
  /**
   * Custom action to upload image to server and after that create new record of that to database.
   *
   * @param   {*|Request}   request
   * @param   {*|Response}  response
   */
  uploadImage: function uploadImage(request, response) {
    var uploadFile = request.file('file');

    uploadFile.upload(function onUploadCompleted(error, files) {
      if (error) {
        return response.negotiate(error);
      }

      // We're only interested on first image
      var file = files[0];

      // Specify source and destination files
      var fileSource = file.fd;
      var fileDestination = fileSource.replace('/.tmp/uploads/', '/uploads/messages/');

      // Create read and write streams for source and destination
      var source = fs.createReadStream(fileSource);
      var destination = fs.createWriteStream(fileDestination);

      // And copy source file to destination
      source.pipe(destination);

      // When file copying is over
      source.on('end', function onSuccess() {
        var data = {
          sender: request.param('sender'),
          type: request.param('type'),
          data: path.basename(fileDestination)
        };

        // Remove source file from .tmp folder
        fs.unlink(fileSource, function(error) {
          if (error) {
            return response.negotiate(error);
          }

          // Create new record to database
          sails.models['message-viewer-message']
            .create(data)
            .exec(function onExec(error, result) {
              if (error) {
                return response.negotiate(error);
              }

              // Publish create message to listeners (sockets)
              sails.models['message-viewer-message'].publishCreate(result);

              response.ok(result);
            })
          ;
        });
      });

      // Oh noes, error occurred when processing file copy
      source.on('error', function onError(error) {
        return response.negotiate(error);
      });
    });
  }
});
