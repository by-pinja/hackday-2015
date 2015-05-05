/**
* Worms-ladder.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    playerName: {
      type: 'string',
      required: true,
      unique: true
    },
    gamesAttended: {
      type: 'integer',
      defaultsTo: 0
    },
    gamesWon: {
      type: 'integer',
      defaultsTo: 0
    }
  }
};
