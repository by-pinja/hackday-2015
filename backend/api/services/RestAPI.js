
var curl = require('curlrequest');
var md5 = require('MD5');

module.exports = {
    makeRequest: function(endPoint, parameters, next) {
        if (!sails.config.hasOwnProperty('valueframe')) {
            return next('Your backend is missing valueframe configuration...');
        }

        var time = Math.floor(Date.now() / 1000);
        var hash = md5(time + '/' + endPoint + '/' + sails.config.valueframe.apiKey);

        var options = {
            url: sails.config.valueframe.url + endPoint,
            verbose: true,
            stderr: true,
            headers: {
                'X-VF-REST-USER': sails.config.valueframe.user,
                'X-VF-REST-TIMESTAMP': time,
                'X-VF-REST-HASH': hash,
                'X-VF-REST-REAL-JSON-OUTPUT': 1
            }
        };

        curl.request(options, next);
    }
};

