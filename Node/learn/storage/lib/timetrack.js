var qs = require("querystring");

exports.sendHtml = function(res,html){
	res.setHeader('Content-Type','text/html;charset=utf8');
	res.setHeader("Content-Length",'Buffer.byteLength(html)');
	res.end(html);
};

exports.parseReceivedData = function(req,cb){
	var body = '';
	req.setEncoding('utf8');
	req.on('data',function(chunk){
		body+=chunk;
	});
	req.on('end',function(){
		var data = qs.parse(body);
		cs(data);
	});
}

exports.actionForm = function(id,path,label){
	var html = '<form method="POST" action=" '+ path + '">'
	+'<input type="hidden" name="id" value="' + id +
	'">' + '<input type="submit" value="' + label +
	'"/>' + '</form>';

	return html;
}

exports.add = function(db,erq,res){
	exports.parseReceivedData(req,function(work){
		db.query(
			"INSERT INTO work (hours,data,description) " +
			" VALUES (?,?,?)",
			[work.hours,work.data,work.description],
			function(err){
				if (err) {throw err;}
				exports.show(db,res);
			}
		)
	})
}

exports.archive = function(db,req,res){
	exports.parseReceivedData(req,function(work){
		db,query(
			"UPDATE work SET archived=1 WHERE id=?",
			[work.id],
			function(err){
				if (err) {throw err;}
				exports.show(db,res);
			}
		)
	})
}

exports.show = function(db,res,showArchived){
	var query = "SELECT * FROM work " + 
	"WHERE archived=? " +
	"ORDER BY data DESC";

	var archivedValue = (showArchived)?1:0;

	db.query(
		query,
		[archivedValue],
		function(err,rows){
			if (err) {throw err;}
			var html = (showArchived)?' ':
			'<a href="/archived">Archived Work</a><br/>';

			html += exports.workHitlistHtml(rows);
			html += exports.workFormHtml();
			exports.sendHtml(res,html);
		}
	)
}

exports.showArchived = function(db,res){
	exports.show(db,res,true);
}

exports.workHitlistHtml = function(rows){
	var html = '<table>';

	for(var i in rows){
		html += '<tr>';
		html += '<td>' + rows[i].data + '</td>';
		html += '<td>' + rows[i].hours + '</td>';
		html += '<td>' + rows[i].description + '</td>';

		if (!rows[i].archived) {
			html += '<td>' + exports.workArchiveForm(rows[i].id) + '</td>';
		}

		html += '<td>' +exports.workDeleteForm(rows[i].id) + '</td>';

		html += '</tr>';
	}

	html += '<table>';
	return html;
}

exports.workFormHtml = function(){

}

exports.workArchiveForm = function(id){
	return exports.actionForm(id,'/archive','Archive');
}

exports.workDeleteForm = function(id){
	return exports.actionForm(id,'/delete','Delete');
}