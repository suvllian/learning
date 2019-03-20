var http = require("http");
var work = require("./lib/timetrack");
var mysql = require("mysql");

var client = mysql.createConnection({
	host:'127.0.0.1',
	user:'root',
	password:'',
	database:'node'
});


var server = http.createServer(function(req,res){
	switch(req.method){
		case 'POST':
			switch(req.url){
				case '/':
					work.add(client,req,res);
					break;
				case '/archive':
					work.archive(client,req,res);
					break;
				case '/delete':
					work.delete(client,req,res);
					break;
			}
			break;
		case 'GET':
			switch(req.url){
				case '/':
					work.show(client,res);
					break;
				case '/archived':
					work.showArchived(client,res);
					break;
			}
			break;
	}
});

client.query(
	"CREATE TABLE IF NOT EXISTS work ("
	+"id int(10) not null auto_increment, "
	+"hours decimal(5,2) default 0, "
	+"data DATE ,"
	+"archived int(1) default 0, "
	+"description LONGTEXT,"
	+"PRIMARY KEY(id))",
	function(err){
		if(err){
			throw err;
		}

		console.log("Server Started!");
		server.listen(8000,'127.0.0.1');
	}
	)