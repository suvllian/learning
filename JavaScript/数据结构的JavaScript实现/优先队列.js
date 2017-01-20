// 最小优先队列
function PriorityQueue(){
	var item = [];

	function QueueElement(element,priority){
		this.element  = element;
		this.priority = priority;
	}

	// 添加新项
	this.enqueue = function(element,priority){
		var queueElement = new QueueElement(element,priority);

		if(this.isEmpty()){
			item.push(queueElement);
		}else{
			var added = false;

			for(let i=0;i<item.length;i++){
				if(queueElement.priority<
					item[i].priority){

					item.splice(i,0,queueElement);
					added = true;
					break;
				}
			}

			if(!added){
				item.push(queueElement);
			}
		}
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
		for(let i = 0;i<item.length;i++){
			console.log(item[i].element);
		}
	}
}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("aaa",1);
priorityQueue.print();
