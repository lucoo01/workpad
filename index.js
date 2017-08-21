var express = require('express');

var app = express();

app.get('',function(req,res){

	//console.log("req:",req);
	
	var reqJson = JSON.stringify(req);

	res.send('Hello world!!'+reqJson);

});

var server = app.listen(7777,function(){

	var host = server.address().address;

	var port = server.address().port;

	console.log("实例地址:",host,port);

});