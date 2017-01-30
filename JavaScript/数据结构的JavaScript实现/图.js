function Graph(){
	var vertices = [];
	var adjList = new Dictionary();

	// 添加顶点
	this.addVertext = function(v){
		vertices.push(v);
		adjList.set(v, []);
	}

	// 添加边
	this.addEdge = function(v, w){
		adjList.get(v).push(w);
		adjList.get(w).push(v);
	}

	var initializeColor = function() {
		var color = [];
		for (var i=0; i<vertices.length; i++) {
			color[vertices[i]] = 'white';
		}
		return color;
	}

	this.bfs = function(v, callback) {
		var color = initializeColor(),
			queue = new Queue();
		queue.enqueue(v);

		while(!queue.isEmpty()) {
			var u = queue.dequeue(),
				neighbors = adjList.get(u);	// 根据字典值得到相邻点
			color[u] = 'grey';
			for (let i=0; i<neighbors.length; i++) {
				var w = neighbors[i];
				if (color[w] === 'white') {
					color[w] = 'grey';
					queue.enqueue(w);
				}
			}
			color[u] = 'balck';
			if (callback) {
				callback(u);
			}
		}
	}

	this.BFS = function(v) {
		var color = initializeColor(),
			queue = new Queue(),
			d = [],pred = [];
		queue.enqueue(v);

		for (let i=0; i<vertices.length; i++) {
			d[vertices[i]] = 0;
			pred[vertices[i]] = null;
		}

		while(!queue.isEmpty()) {
			var u = queue.dequeue(),
				neighbors = adjList.get(u);	// 根据字典值得到相邻点
			color[u] = 'grey';
			for (let i=0; i<neighbors.length; i++) {
				var w = neighbors[i];
				if (color[w] === 'white') {
					color[w] = 'grey';
					d[w] = d[u] + 1;
					pred[w] = u;
					queue.enqueue(w);
				}
			}
			color[u] = 'balck';
		}

		return {
			distance: d,
			predecessors: pred
		}
	}

	var dfsVisit = function(u, color, callback) {
		color[u] = 'grey';
		if (callback){
			callback(u);
		}
		var neighbors = adjList.get(u);
		for (let i=0; i<neighbors.length; i++) {
			var w = neighbors[i];
			if (color[w] === 'white') {
				dfsVisit(w, color, callback);
			}
		}
		color[u] = 'black';
	}

	this.dfs = function(callback) {
		var color = initializeColor();
		for (let i=0; i<vertices.length;i++) {
			if (color[vertices[i]] === 'white') {
				dfsVisit(vertices[i], color, callback);
			}
		}
	}

	this.toString = function() {
		var s = '';
		for (var i=0; i<vertices.length; i++) {
			s += vertices[i] + ' -> ';
			var neighbors = adjList.get(vertices[i]);
			for (var j=0; j<neighbors.length; j++) {
				s += neighbors[j] + ' ';
			}
			s += '\n';
		}
		return s;
	}
}


var graph = new Graph();
var myVerticle = ['A','B','C','D','E','F','G','H','I'];
for (var i=0; i<myVerticle.length; i++){
	graph.addVertext(myVerticle[i]);
}
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('C','D');
graph.addEdge('C','G');
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('E','I');
console.log(graph.toString());

function printNode(value) {
	console.log('Visited : ' + value);
}
graph.bfs(myVerticle[0], printNode);
graph.dfs(printNode);
console.log(graph.BFS(myVerticle[0]));

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
