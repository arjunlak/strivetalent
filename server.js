var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require("http");
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended:true}));
// parse application/json
app.use(bodyParser.json());

/*var connectionString = "mongodb://127.0.0.1/shilpa";
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
var port = Number(process.env.PORT || 3009);
var ip = '127.0.0.1';

app.listen(port);
//require('node-monkey').start({host: ip, port:3003});
console.log("open!!");