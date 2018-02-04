var userdetails = require('./config');

module.exports = {
    getConnectionDbString: function() {
        return 'mongodb://' + userdetails.username + ':' + userdetails.password + '@ds113358.mlab.com:13358/medicaldatabase';
    }
};