'use strict';

var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var Buffer = require('buffer');

/**
 * message-viewer-messageController.js
 *
 * @description :: Server-side logic for managing worms-ladders
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = _.merge(_.cloneDeep(require('../base/Controller')), {
  showImage: function showImage(request, response) {
    var imageFile = request.param('image');
    var fileSource = sails.config.appPath + '/uploads/messages/' + imageFile;

    fs.readFile(fileSource, function(error, data) {
      if (error) {
        // TODO: send placeholder image...
        return response.negotiate(error);
      }

      response.writeHead(200, {'Content-Type': 'image/jpeg'});
      response.end(data); // Send the file data to the browser.
    });
  },
  uploadImage: function uploadImage(request, response) {
    console.log('heee');

    var uploadFile = request.file('file');

    uploadFile.upload(function onUploadCompleted(error, files) {
      if (error) {
        return response.negotiate(error);
      }

      var file = files[0];

      var fileSource = file.fd;
      var fileDestination = fileSource.replace('/.tmp/uploads/', '/uploads/messages/');

      var source = fs.createReadStream(fileSource);
      var destination = fs.createWriteStream(fileDestination);

      source.pipe(destination);

      source.on('end', function onSuccess() {
        var data = {
          sender: request.param('sender'),
          type: request.param('type'),
          data: path.basename(fileDestination)
        };

        sails.models['message-viewer-message']
          .create(data)
          .exec(function onExec(error, result) {
            if (error) {
              return response.negotiate(error);
            }

            sails.models['message-viewer-message'].publishCreate(result);

            response.ok(result);
          });
      });

      source.on('error', function onError(error) {
        return response.negotiate(error);
      });
    });
  }
});
