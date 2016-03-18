var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

var MessageSchema = new Schema({
  fullname: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  message: {
    type: String,
    trim: true,
    required: true
  }
});

var Message = mongoose.model('Message', MessageSchema);

module.exports = Message;