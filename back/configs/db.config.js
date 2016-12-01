const mongoose = require('mongoose');

let db = "mongodb://localhost/syncro";

mongoose.connect(db);

mongoose.connection.on('connected', function() {
    console.log('Mongoose default connection open to ' + db);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose default connection disconnected');
});

mongoose.connection.on('open', function() {
    console.log('Mongoose default connection is open');
});

process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});