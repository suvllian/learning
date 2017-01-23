function Set(){
	var items = {};

	// 判断集合中是否存在该元素
	this.has = function(value){
		return value in items;
	}

	// 向集合中添加元素
	this.add = function(value){
		if(!this.has(value)){
			items[value] = value;
			return true;
		}
		return false;
	}

	// 删除集合中的元素
	this.remove = function(value){
		if(this.has(value)){
			delete items[value];
			return true;
		}
		return false;
	}

	// 输出集合中的所有元素
	this.display = function(){
		for(var prop in items){
			if(items.hasOwnProperty(prop)){
				console.log(prop);
			}
		}
	}

	// 清空集合
	this.clear = function(){
		items = {};
	}

	// 输出集合中元素个数。支持ES5以上
	this.size = function(){
		let size = Object.keys(items).length;
		console.log(size);
		return size;
	}

	// 输出集合中元素的个数。兼容
	this.sizeLegacy = function(){
		var count = 0;
		for(var prop in items){
			if(items.hasOwnProperty(prop)){
				++count;
			}
		}
		console.log(count);
		return count;
	}

	// 以数组形式返回集合中的元素
	this.values = function(){
		return Object.keys(items);
	}

	// 以数组形式返回集合中的元素。兼容
	this.valuesLegacy = function(){
		var keys = [];
		for(var key in items){
			keys.push(key);
		}
		return keys;
	}

	// 集合操作

	// 并集
	this.union = function(otherSet){
		var unionSet = new Set();

		var values = this.values();
		for(let i=0; i<values.length; i++){
			unionSet.add(values[i]);
		}

		values = otherSet.values();
		for(let i=0; i<values.length; i++){
			unionSet.add(values[i]);
		}

		return unionSet;
	}

	// 交集
	this.intersection = function(otherSet){
		var intersectionSet = new Set();

		var values = this.values();
		for(let i=0; i<values.length; i++){
			if(otherSet.has(values[i])){
				intersectionSet.add(values[i]);
			}
		}
		return intersectionSet;
	}

	// 差集
	this.difference = function(otherSet){
		var differenceSet = new Set();

		var values = this.values();
		for(let i=0; i<values.length; i++){
			if(!otherSet.has(values[i])){
				differenceSet.add(values[i]);
			}
		}
		return differenceSet;
	}

	// 子集
	this.subset = function(otherSet){
		if(this.size() > otherSet.size()){
			return false;
		}else{
			var values = this.values();
			for(let i=0; i<values.length;i++){
				if(!otherSet.has(values[i])){
					return false;
				}
			}
			return true;
		}
	}
}

var set = new Set();
set.add(1);
set.add("TOM");
set.add("Jack");
set.display();
set.sizeLegacy();
console.log(set.valuesLegacy());

var setA = new Set();
setA.add("Jack");
setA.add("Mary");
//并集
var unionAB = set.union(setA);
console.log(unionAB.values());
//交集
var intersectionAB = set.intersection(setA);
console.log(intersectionAB.values());
//差集
var differenceAB = set.difference(setA);
console.log(differenceAB.values());
//子集
var subsetAB = set.subset(setA);
console.log(subsetAB);