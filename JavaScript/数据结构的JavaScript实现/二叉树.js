function BinarySearchTree(){

	// 一个节点的子节点右边大于左边
	var Node = function(key){
		this.key   = key;
		this.left  = null;
		this.right = null;
	}

	var rootNode = null;

	var insertNode = function(node, newNode){
		if(newNode.key < node.key){
			if(node.left === null){
				node.left = newNode;
			}else{
				insertNode(node.left, newNode);
			}
		}else{
			if (node.right === null) {
				node.right = newNode;
			}else{
				insertNode(node.right, newNode);
			}
		}
	}

	this.insert = function(key){
		var newNode = new Node(key);
		if(rootNode === null){
			rootNode = newNode;
		}else{
			insertNode(rootNode, newNode);
		}
	}

	// 先序遍历
	var preOrederTraverseNode = function(node, callback){
		if(node !== null){
			callback(node.key);
			preOrederTraverseNode(node.left, callback);
			preOrederTraverseNode(node.right, callback);
		}
	}

	this.preOrederTraverse = function(callback){
		preOrederTraverseNode(rootNode, callback);
	}

	// 中序遍历
	var inOrderTraverseNode = function(node, callback){
		if(node !== null){
			inOrderTraverseNode(node.left, callback);
			callback(node.key);
			inOrderTraverseNode(node.right, callback);
		}
	}

	this.inOrderTraverse = function(callback){
		inOrderTraverseNode(rootNode, callback);
	}

	// 后序遍历
	var postOrderTraverseNode = function(node, callback){
		if(node !== null){
			postOrderTraverseNode(node.left, callback);
			postOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	}

	this.postOrderTraverse = function(callback){
		postOrderTraverseNode(rootNode, callback);
	}

	// 最小值
	this.min = function(){
		return minNode(rootNode);
	}

	var minNode = function(node){
		if(node){
			while(node && node.left !== null){
				node = node.left;
			}
			return node.key;
		}
		return null;
	}

	// 最大值
	this.max = function(){
		return maxNode(rootNode);
	}

	var maxNode = function(node){
		if(node){
			while(node && node.right !== null){
				node = node.right;
			}
			return node.key;
		}
		return null;
	}

	// 特定值
	this.search = function(key){
		return searchNode(rootNode, key);
	}

	var searchNode = function(node, key){
		if(node === null){
			return false;
		}

		if(key < node.key){
			return searchNode(node.left, key);
		}else if(key > node.key){
			return searchNode(node.right, key);
		}else{
			return true;
		}
	}

	// 移除节点
	this.remove = function(key){
		rootNode = removeNode(rootNode, key);
	}

	var removeNode = function(node, key){
		if(node === null){
			return null;
		}

		if(key < node.key){
			node.left = removeNode(node.left, key);
			return node;
		}else if(key > node.key){
			node.right = removeNode(node.right, key);
			return node;
		}else{

			// 第一种情况
			if(node.left === null && node.right === null){
				node = null;
				return node;
			}

			// 第二种情况 只有一个子节点
			if(node.left === null){
				node = node.right;
				return node;
			}else if(node.right === null){
				node = node.left;
				return node;
			}

			// 两个子节点
			var minValue = minNode(node.right);
			node.key = minValue;
			node.right = removeNode(node.right, minValue);
			return node;
		}
	}
}	

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(15);
tree.insert(13);
tree.insert(20);
tree.insert(12);
tree.insert(14);
tree.insert(18);
tree.insert(25);

var printNode = function(value){
	console.log(value);
}
console.log(" inOrderTraverse ");
tree.inOrderTraverse(printNode);
console.log(" preOrederTraverse ");
tree.preOrederTraverse(printNode);
console.log(" postOrderTraverse ");
tree.postOrderTraverse(printNode);
console.log(" min");
console.log(tree.min());
console.log(" max ");
console.log(tree.max());
console.log(" search");
console.log(tree.search(43));
console.log(" remove ");
console.log(tree.remove(15));
tree.inOrderTraverse(printNode);