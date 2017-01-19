function Stack(){
	var item = [];

	// 添加新项
	this.push = function(element){
		item.push(element);
	}

	// 删除最后一项
	this.pop = function(){
		return item.pop();
	}

	// 返回最后一项
	this.peek = function(){
		return item[item.length - 1];
	}

	// 栈是否为空
	this.isEmpty = function(){
		return item.length == 0;
	}

	// 栈的长度
	this.size = function(){
		return item.length;
	}

	// 清空栈
	this.clear = function(){
		item = [];
	}

	// 打印栈
	this.print = function(){
		console.log(item.toString());
	}
}

var stack = new Stack();

stack.push(2);
stack.push(12);
stack.print();
console.log(stack.peek());
console.log(stack.isEmpty());