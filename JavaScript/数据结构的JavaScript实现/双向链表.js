// 双向链表

function DoublyLinkedList(){

	var Node = function(element){
		this.element = element;
		this.prev    = null;
		this.next    = null;
	}

	var length = 0,
		head = null,tail = null;	// 头节点，尾节点

	this.append = function(element){
		var newNode = new Node(element);

		// 链表中节点数大于1
		if(head && head!=tail){
			tail.next    = newNode;
			newNode.prev = tail;
			tail         = newNode;

		// 链表中只有一个节点
		}else if(head && head===tail){
			head.next    = newNode;
			newNode.prev = head;
			tail         = newNode;

		// 链表为空
		}else{
			head = newNode;
			tail = newNode;
		}
		length++;
	}

	this.insert = function(position,element){
		if(position >= 0 && position <= length){
			var newNode = new Node(element),
				current = head,previous = null,
				index = 0;

			if(position === 0){
				if(!head){
					head = newNode;
					tail = newNode;
				}else{
					newNode.next = head;
					head.prev    = newNode;
					head         = newNode;
				}
			}else if(position === length){
				current      = tail;
				current.next = newNode;
				newNode.prev = current;
				tail         = newNode;
			}else{
				while(index++ < position){
					previous = current;
					current  = current.next;
				}

				newNode.next  = current;
				newNode.prev  = previous;
				previous.next = newNode;
				current.prev  = newNode;
			}

			length++;
			return true;
		}else{
			return false;
		}
	}

	this.removeAt = function(position){
		if(position >= 0 && position <= length){
			var current = head,previous = null,
				index = 0;

			if (position === 0) {
				head = current.next;

				if (length === 1) {
					tail = null;
				}else{
					head.prev = null;
				}
			}else if(position === length-1){
				current = tail;
				tail    = current.prev;
				tail.next = null;
			}else{
				while(index++ < position){
					previous = current;
					current  = current.next;
				}

				previous.next     = current.next;
				current.next.prev = previous;
			}

			length--;
			return current.element;
		}else{
			return null;
		}
	}

	this.display = function(){
		var current = head;
		while(current){
			console.log(current.element);
			current = current.next;
		}
	}

	this.size = function(){
		console.log(length);
		return length;
	}
}

var list = new DoublyLinkedList();

list.append("Jack");
list.append("Tom");
list.insert(1,"Song");
list.removeAt(1);
list.display();
list.size();