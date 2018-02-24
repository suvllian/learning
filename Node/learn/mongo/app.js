var mongo = require('mongodb');

var server = new mongo.Server('localhost', 27017, { auto_reconnect: true });
var db = new mongo.Db('local', server, { safe: true });

// 插入数据
db.open((err, db) => {
	if (err) {
		throw err;
	} else {
		db.collection('users', (err, collection) => {
			collection.insert({ username: 'suvllian', age: 'aaaa' }, (err, docs) => {
				console.log(docs);
				db.close();
			})
		})
	}
});

// 查询数据
db.open((err, db) => {
	if (err) {
		throw err;
	} else {
		db.collection('users', (err, collection) => {
			collection.find({ }).toArray((err, docs) => {
				if (err) {
					throw err;
				} else {
					console.log(docs);
				}
			})
		})
	}
});

db.on('close', (err, db) => {
	if (err) {
		throw err;
	} else {
		console.log('成功关闭数据库');
	}
})
