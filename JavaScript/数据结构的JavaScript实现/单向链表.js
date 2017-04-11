// 单向链表
var List = function(){

	function Node(value){
		this.value = value;
		this.next = null;
	}

	// 相当于构造函数
	this.init = function(){
		this.head = null;
		this.size = 0;
	}
	this.init();

	// 在链表末尾添加元素
	this.append = function(newData){
		this.size++;
		var newNode = new Node(newData);
		if(this.head==null){
			this.head = newNode;
			return;
		}else{
			var tempNode = this.head;
			while (tempNode.next) {
				tempNode = tempNode.next;
			}
			// 最后一个节点的next指针
			tempNode.next = newNode;
		}	
	}

	// 在链表中找到指定项并返回
	this.find = function(item){
		var currentNode = this.head;
		while(currentNode.value!=item){
			if(currentNode.next!=null){
				currentNode = currentNode.next;
			}else{
				console.log("未找到！");
				return null;
			}
		}
		return currentNode;
	}

	// 在指定项的后面添加元素
	this.insertAfter = function(newData,item){
		this.size++;
		var newNode = new Node(newData);
		var currentNode = this.find(item);
		if (!currentNode) {
			console.log("要插入的位置不存在！");
			return ;
		}
		newNode.next = currentNode.next;
		currentNode.next = newNode;
	}

	// 在指定位置添加元素，头节点的位置为1。
	this.insertByPosition = function(position,newData){
		this.size++;
		var newNode = new Node(newData);
		var index = 1,currentNode = this.head;
		if(position === 0){
			newNode.next = this.head;
			this.head    = newNode;
		}else{
			while(index++ < position){
				currentNode = currentNode.next;
			}
			newNode.next     = currentNode.next;
			currentNode.next = newNode;
		}
	}

	// 通过位置删除元素,返回被删除的节点
	this.removeByPos = function(position){
		if(position >= this.size || position < 0){
			console.log("输入正确的位置！");
			return null;
		}else{
			this.size--;
			var tempNode = this.head;
			if (position == 0) {
				this.head = this.head.next;
				return this.head;
			}
			var index = 1;
			while(index++ < position){
				tempNode = tempNode.next;
			}
			tempNode.next = tempNode.next.next;
			return tempNode.next;
		}
	}

	// 删除指定项
	this.remove = function(item){
		var index = this.indexOf(item);
		this.removeByPos(index);
	}

	// 得到指定位置的元素的值
	this.getDataByPos = function(position){
		if(position>=this.size||position<0){
			return ;
		}else{
			var tempNode = this.head;
			for(var i = 0;i < position;i++){
				tempNode = tempNode.next;
			}
			return tempNode.value;
		}
	}

	// 得到指定元素的位置
	this.indexOf = function(item){
		var current = this.head,
			index = 0;

		while(current){
			if(item === current.value){
				return index;
			}
			index++;
			current = current.next;
		}

		return false;
	}

	// 打印所有节点
	this.display = function(){
		var currentNode = this.head;
		while(currentNode){
			console.log(currentNode.value);
			currentNode = currentNode.next;
		}
	}

	// 得到链表长度
	this.getSize = function(){
		console.log(this.size);
	}


	this.isEmpty = function(){
		return this.size === 0;
	}

	// 以字符串形式输出链表
	this.toString = function(){
		var currentNode = this.head,
			string = '';

		while(currentNode){
			string += ',' + currentNode.value;
			currentNode = currentNode.next;
		}
		return string.slice(1);
	}

	// 返回头节点
	this.getHead = function(){
		return this.head;
	}
}

var cities = new List();
cities.append("Jack");
cities.append("Tom");
cities.insertAfter("Mary","Jack");
cities.insertByPosition(2,"Song");
cities.removeByPos(2);
cities.display();
cities.getSize();
console.log(cities.getDataByPos(1));
console.log(cities.toString());