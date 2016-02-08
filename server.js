var express = require('express');
var app = express();
var PORT = process.env.PORT || 8000;

app.use('/js', express.static('public/js'));
app.use('/style', express.static('public/style'));

app.get("/", function(req,res){
    res.sendFile(process.cwd() + "/views/home.html");
});

app.listen(PORT, function(){
    console.log("Listening on Port %s", PORT);
});