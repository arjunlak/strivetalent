var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require("http");
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended:true}));
// parse application/json
app.use(bodyParser.json());

var connectionString = "mongodb://heroku_7m34wm28:sec3jmgvdcqu66jvttoqglsorg@ds249325.mlab.com:49325/heroku_7m34wm28";

//var connectionString = "mongodb://127.0.0.1/shilpa";
mongoose.connect(connectionString);
var UserSchema = new mongoose.Schema({
	fname : String,
    	lname : String,
    	email:String
},{collection : 'articleList'});
var userRes = mongoose.model('ArticleList',UserSchema);

/*

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


*/



app.post("/saveUser", function (req,res){
console.log(req.body);
	var newData = new userRes({
	    fname : req.body.newObj[0].fname,
	    lname : req.body.newObj[0].lname,
	    email : req.body.newObj[0].email,

	});
	newData.save();
	res.send({"success" : "success"});
});

var port = Number(process.env.PORT || 3009);
var ip = '127.0.0.1';

app.listen(port);
//require('node-monkey').start({host: ip, port:3003});
console.log("open!!");