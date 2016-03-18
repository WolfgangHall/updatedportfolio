var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var mongoose = require('mongoose');
var Message = require('./config/schema.js');
mongoose.connect('mongodb://localhost/websiteMessages');




var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/js', express.static('public/js'));
app.use('/style', express.static('public/style'));

app.get("/", function(req,res){
    res.sendFile(process.cwd() + "/views/home.html");
});

app.post('/message', function (req, res){
  var newMessage = {
    fullname: req.body.fullname, 
    email: req.body.email, 
    message: req.body.message
  }

  var message = new Message(newMessage);

  message.save(function (err, doc){
    if (err) {return (err)}
  })
  res.redirect('/?msg=Message sent');
});




 app.listen(PORT, function() {
  console.log("LISTENING on Port %s", PORT);
 });


