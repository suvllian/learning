function Dictionary(){
	var items = {};

	// 判断字典中是否有该属性
	this.has = function(key){
		return key in items;
	}

	// 向字典中添加属性，若属性存在则更新
	this.set = function(key,value){
		items[key] = value;
	}

	// 输出集合中的所有元素
	this.display = function(){
		for(var prop in items){
			if(items.hasOwnProperty(prop)){
				console.log(prop + "-" + items[prop]);
			}
		}
	}

	// 删除属性
	this.remove = function(key){
		if(this.has(key)){
			delete items[key];
			return true;
		}
		return false;
	}

	// 返回属性的值
	this.get = function(key){
		return this.has(key) ? items[key] : undefined;
	}

	// 以数组形式返回字典中的值
	this.values = function(){
		var values = [];
		for(var key in items){
			if(items.hasOwnProperty(key)){
				values.push(items[key]);
			}
		}
		return values;
	}

	// 清空字典
	this.clear = function(){
		items = {};
	}

	// 返回字典的大小
	this.size = function(){
		return Object.keys(items).length;
	}

	// 返回字典对象
	this.getItems = function(){
		return items;
	}
}

var dictionary = new Dictionary();

dictionary.set("Tom","13589652356");
dictionary.set("Jack","18095263659");
dictionary.remove("Jack");
dictionary.display();
console.log(dictionary.size());
console.log(dictionary.values());
console.log(dictionary.getItems());
console.log(dictionary.clear());
dictionary.display();
console.log(dictionary.size());