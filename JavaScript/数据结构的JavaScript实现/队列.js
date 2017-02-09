function Queue(){
	var item = [];

	// 添加新项
	this.enqueue = function(element){
		item.push(element);
	}

	// 删除第一项
	this.dequeue = function(){
		return item.shift();
	}

	// 返回第一项
	this.front = function(){
		return item[0];
	}

	// 队列是否为空
	this.isEmpty = function(){
		return item.length == 0;
	}

	// 队列长度
	this.size = function(){
		return item.length;
	}

	// 清空队列
	this.clear = function(){
		item = [];
	}

	// 打印队列
	this.print = function(){
		console.log(item.toString());
	}
}

var queue = new Queue();