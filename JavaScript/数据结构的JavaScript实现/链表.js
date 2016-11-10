function Node(value){
	this.value = value;
	this.next = null;
}

var List = function(){
	this.init = function(){
		this.head = new Node('head');
		this.size = 0;
	}
	this.init();

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

	this.insert = function(newData){
		this.size++;
		var newNode = new Node(newData);
		if(this.head==null){
			this.head = newData;
			return;
		}
		var tempNode = this.head;
		while (tempNode.next) {
			tempNode = tempNode.next;
		}
		tempNode.next = newNode;
	}

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

	this.removeByPos = function(pos){
		if(pos >= this.size || pos < 0){
			console.log("输入正确的位置！");
			return null;
		}
		this.size--;
		var tempNode = this.head;
		if (pos==0) {
			this.head = this.head.next;
			return this.head;
		}
		for(var i = 0;i<pos-1;i++){
			tempNode = tempNode.next;
		}
		tempNode.next = tempNode.next.next;
		return tempNode.next;
	}

	this.getDataByPos = function(pos){
		if(pos>=this.size||pos<0){
			return ;
		}else{
			var tempNode = this.head;
			for(var i = 0;i < pos;i++){
				tempNode = tempNode.next;
			}
			return tempNode.value;
		}
	}

	this.display = function(){
		var currentNode = this.head;
		while(!(currentNode.next==null)){
			currentNode = currentNode.next;
			console.log(currentNode.value);
		}
	}

	this.getSize = function(){
		console.log(this.size);
	}
}

var cities = new List();
cities.insertAfter("Jack", "head");
cities.insert("Tom");
cities.insert("Lisa");
cities.insert("Bire");
cities.getSize();
cities.display();


cities.removeByPos(2);
cities.getSize();
cities.display();