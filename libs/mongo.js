const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Config = require('../config/config.json');

// ConnectionString
let dbHost = Config.db_config.host;

// for taking username and password from env variables
//let dbHost = dbHost.replace('{{username}}', process.env.DBUSER).replace("password", process.env.DBPASSWORD);

mongoose.Promise = global.Promise;

// Connection function
var connectWithRetry = function() {
    mongoose.connect(dbHost, { server: { auto_reconnect: true, reconnectTries: 2, useNewUrlParser: true, useNewUrlParser: true } }, function(err) {
        if (err) {
            console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
            setTimeout(connectWithRetry, 5000);
        }
    });
};

// calling connection
connectWithRetry();

// connection success event
mongoose.connection.on('connected', function() {
    console.log("Connected");
})

// connection error event
mongoose.connection.on('error', function(err) {
    console.log('Mongoose default connection error: ' + err);
});

// connection disconnected event
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose default connection disconnected');

});


var user = new Schema({
    name: String,
    email: String,
    password: String
});


// export schema
module.exports = {
    userModel: mongoose.model('UserSchema', user, 'users')
};