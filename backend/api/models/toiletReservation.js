/**
 * Created by hackday on 7.5.2015.
 */
module.exports = {
    schema: true,
    attributes: {
        type: {
            type: 'integer',
            required: true,
            defaultsTo: 0
        },
        avoidingWork: {
            type: 'boolean',
            required: true,
            defaultsTo: false
        },
        reservationEndTime: {
            type: 'datetime',
            required: true
        }
    }
};
