/**
* Worms-ladder.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,
  attributes: {
    playerName: {
      type: 'string',
      required: true,
      unique: true
    },
    gamesAttended: {
      type: 'integer',
      required: true,
      defaultsTo: 0
    },
    gamesWon: {
      type: 'integer',
      required: true,
      defaultsTo: 0
    }
  }
};
