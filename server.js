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
var connectionString = "mongodb://heroku_7m34wm28:sec3jmgvdcqu66jvttoqglsorg@ds249325.mlab.com:49325/heroku_7m34wm28";

var connectionString = "mongodb://127.0.0.1/shilpa";
mongoose.connect(connectionString);

var shilpaClass = new mongoose.Schema({

},{collection : 'chipla'});

var shilpaInstance = mongoose.model('chipla',shilpaClass);
app.get("/getShilpa", function (req,res){
    shilpaInstance.find({},function(err,data){
        console.log(data);
        res.json(data);  //sending data to client
    });
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
});

var port = Number(process.env.PORT || 3009);
var ip = '127.0.0.1';

app.listen(port);
//require('node-monkey').start({host: ip, port:3003});
console.log("open!!");