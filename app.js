var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var userdetails = require('./public/datacontroler/auth/config.json');
var authentication = require('./public/datacontroler/auth/dbstring');
var apidata = require('./public/datacontroler/apidata');
var sampledata = require('./public/datacontroler/sampledata');
var port = process.env.PORT || 3000;
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
var options = {
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
};
mongoose.connect(authentication.getConnectionDbString(), options, function() {
    console.log('DB Connected');
});
apidata(app);
sampledata(app);


app.listen(port, function() {
    console.log('Server is running');
});