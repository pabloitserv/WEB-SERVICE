var conf = require('./constants.js');

var mongoose =  require('mongoose');

mongoose.connect(conf.db_url);
mongoose.connection.on('connect', function () {
  console.log('Mongoose default connection open to '+ conf.url);
});
mongoose.connection.on('error', function ( err ) {
  console.log('Mongoose default connection error '+ err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});
mongoose.connection.on('open', function () {
  console.log('Mongoose default connection is open');

process.on('SIGINT', function () {
  mongoose.connection.close( function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

});
