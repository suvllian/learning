var fs = require('fs');

// 读取文件
fs.readFile('./app.txt', 'utf8', (err, data) => {
	if (err) {
		console.log(err)
	} else {
		console.log(data)
	}
});

// 写入文件选项
var options = {
	flag: 'a',
	encoding: 'utf8'
}

// 写入文件
fs.writeFile('./app.txt', '写入\r\n', options, (err) => {
	console.log(err)
});

// 追加数据
fs.appendFile('./app.txt', '这是追加的数据\r\n', 'utf8' ,(err) => {
  if (err) {
  	console.log('追加数据失败');
  } else {
  	console.log('追加数据成功');
  }
});

// 打开文件
fs.open('./app.txt', 'r+', (err, fd) => {
	var readBuff = new Buffer(255);
	var writeBuff = new Buffer('学习使我快乐\r\n');
	fs.read(fd, readBuff, 0, 9, 3, (err, bytesRead, buffer) => {
		if (err) {
			console.log('读取数据失败');
		} else {
      console.log(buffer.slice(0, bytesRead).toString());
		}
	});

	fs.write(fd, writeBuff, 0, 20, 0, (err, weitten, buffer) => {
		if (err) {
			console.log('写入数据失败');
		} else {
      
		}
	});

  fs.fstat(fd, (err, stats) => {
  	console.log(stats);
  });

	fs.close(fd);
});

// 创建文件夹
fs.mkdir('./mkdir', (err) => {
	if (err) {
		console.log('创建文件夹失败');
	} else {
		console.log('创建文件夹成功');
	}
});

// 读取目录
fs.readdir('./mkdir', (err, files) => {
	if (err) {
		console.log('读取文件夹失败');
	} else {
		console.log(files);
	}
});

// 查看文件或目录的信息
fs.lstat('./dir', (err, stats) => {
	console.log(stats);
});

// 检查文件或目录是否存在
fs.exists('./dir', (exists) => {
	console.log(exists);
});

// 获取文件或目录的绝对路径
fs.realpath(__dirname, (err, resolvedPath) => {
	console.log(resolvedPath);
});