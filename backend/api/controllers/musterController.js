module.exports = {


    /**
     * Generic count action for controller.
     *
     * @param {Request}   request
     * @param {Response}  response
     */
    addInspection: function addInspection(request, response) {

        var stationId = request.param('stationId');

        sails.sockets.blast('musterInspection', stationId);

        response.ok();
    }
};