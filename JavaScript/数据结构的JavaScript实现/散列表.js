// 基础散列表，没有考虑冲突

function HashTable(){
	var table = [];

	// 散列函数
	var hashCode = function(key){
		var hash = 0;
		for(var i=0; i < key.length; i++){
			hash += key.charCodeAt(i);
		}
		return hash % 37;
	}

	this.put = function(key,value){
		var position = hashCode(key);
		table[position] = value;
		console.log(position + ' - ' + key);
	}

	this.get = function(key){
		return table[hashCode(key)];
	}

	this.remove = function(key){
		table[hashCode(key)] = undefined;
	}

	this.display = function(){
		var length = table.length;
		for(let i=0; i<length; i++){
			if (table[i]!==undefined){
				console.log(i + " : " + table[i]);
			}
		}
	}
}	

var hashTable = new HashTable();
hashTable.put("Jack","100");
hashTable.put("Tom","99");
hashTable.remove("Tom");
console.log(hashTable.get("Jack"));

hashTable.display();