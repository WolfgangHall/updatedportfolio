var express = require('express');
var app = express();
var PORT = process.env.PORT || 8000;

// var mysql = require('mysql');

// var Sequelize = require('sequelize');
// // var sequelize = new Sequelize('auth_db', 'root');

// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: false}));

app.use('/js', express.static('public/js'));
app.use('/style', express.static('public/style'));

// var User = sequelize.define('User', {
//  email: {
//   type: Sequelize.STRING,
//   validate: {
//    len: {
//     args: [5,30]
//    },
//    isEmail: true
//   },
//   allowNull: false
//  },
//  name: {
//   type: Sequelize.STRING,
//   validate: {
//    len: {
//     args: [1,30],
//     msg: "You must have a first name"
//    }
//   },
//   allowNull: false
//  },
//  message: {
//   type: Sequelize.TEXT,
//   validate: {
//    len: {
//     args: [1,300],
//     msg: "Please leave a message"
//    }
//   },
//   allowNull: false
//  }
// });

app.get("/", function(req,res){
    res.sendFile(process.cwd() + "/views/home.html");
});

// app.post('/note', function(req, res) {

//  User.create(req.body).then(function(user) {
//   res.redirect('/');
//  }).catch(function(err) {
//   console.log(err);
//   res.redirect('/?msg=' + err.message);
//  });
// });

// sequelize.sync().then(function() {
 app.listen(PORT, function() {
  console.log("LISTENING on Port %s", PORT);
 });
// });

