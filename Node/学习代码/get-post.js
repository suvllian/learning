var http = require("http");
var url  = require("url");
var util = require("util");
var querystring = require("querystring");

// 处理POST请求
http.createServer(function(request, response){
	var post = '';

	request.on("data", function(chunk){
		post += chunk;
	});

	request.on("end", function(){
		post = querystring.parse(post);
		response.end(util.inspect(post));
	});
}).listen(3000);

// 处理GET请求 
http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end(util.inspect(url.parse(request.url, true)));
}).listen(3000);

console.log("Server Started");