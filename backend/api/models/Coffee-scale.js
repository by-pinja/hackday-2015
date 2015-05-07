/**
* Coffee-scale.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,
  attributes: {
      scaleId: {
  	  type: 'string',
 	  required: true,
	  unique: true
      },
      weight: {
	  type: 'integer',
          required: true,
          defaultsTo: 0
      },
      weightMax: {
	  type: 'integer',
          required: true,
          defaultsTo: 5115
      },
      weightEmpty: {
	  type: 'integer',
          required: true,
          defaultsTo: 1000
      },
      fillTime: {
	  type: 'datetime',
	  required: false
      },
      cups: {
	  type: 'integer',
	  required: false,
 	  defaultsTo: 0
      },
      percentage: {
	  type: 'float',
	  required: false,
	  defaultsTo: 0
      },
      temperature: {
	  type: 'float',
	  required: false,
	  defaultsTo: 0
      }
  },
  beforeUpdate: function (values, cb) {
      sails.models['coffee-scale'].findOne(this.update.arguments[0]).exec(function(err,found) {
	if (values.hasOwnProperty('weight')) {
	  var weightEmpty = found.weightEmpty;
          var weightMax = found.weightMax;
	  if (values.hasOwnProperty('weightMax')) {
	    weightMax = values.weightMax;
	  }
	  if (values.hasOwnProperty('weightEmpty')) {
            weightEmpty = values.weightEmpty;
          }
          var curWeight = (values.weight - weightEmpty);
	  if (curWeight < 0) curWeight = 0;
          var maxContentWeight = (weightMax - weightEmpty);
          values.percentage = parseInt(curWeight / maxContentWeight * 100);
          values.cups = parseInt(curWeight / 200); // todo: move "cup size" to setting
  	  if (found.weight == 0 && values.weight > weightEmpty) {
	     values.fillTime = new Date().toISOString();
          }
        }
        cb();
      });
  }
};

