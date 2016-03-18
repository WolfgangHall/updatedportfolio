var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

var MessagesSchema = new Schema({
  fullname: String,
  message: String,
  email: String
});

exports.Message = mongoose.model('Messages', MessagesSchema);