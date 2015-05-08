module.exports = {
  schema: true,
  attributes: {
    id: {
      type: 'string',
      required: true,
      unique: true,
      defaultsTo: 0
    },
    type: {
      type: 'string',
      required: true
    },
    data: {
      type: 'string',
      required: true,
      defaultsTo: ''
    },
    sender: {
      type: 'string',
      required: true,
      defaultsTo: ''
    }
  }
};
