/**
 * Created by hackday on 7.5.2015.
 */
module.exports = {
    schema: true,
    attributes: {
        index: {
            type: 'integer',
            required: true,
            defaultsTo: 0
        },
        type: {
            type: 'integer',
            required: true,
            defaultsTo: 0
        },
        reservationEndTime: {
            type: 'datetime',
            required: true
        }
    }
};
