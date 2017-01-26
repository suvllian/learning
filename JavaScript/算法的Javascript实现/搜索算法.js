function ArrayList(){
	var array = [];

	this.insert = function(item){
		array.push(item);
	}

	this.toString = function(){
		return array.join();
	}

	// 快速排序
	this.quickSort = function(){
		quick(array, 0, array.length-1);
	}

	var quick = function(array, left, right){
		var index = partition(array, left, right);
		if(left < index-1){
			quick(array, left, index-1);
		}

		if(index < right){
			quick(array, index, right);
		}
	}

	var partition = function(array, left, right){
		var main = array[Math.floor((left + right) / 2)],
			i = left,j = right;
		while(i <= j){
			while(array[i] < main){
				i++;
			}
			while(array[j] > main){
				j--;
			}
			if(i <= j){
				swapQuickStort(array, i ,j);
				i++;
				j--;
			}
		}
		return i;
	}

	var swapQuickStort = function(array, index1, index2){
		var temp = array[index1];
		array[index1] = array[index2];
		array[index2] = temp;
	}

	// 顺序搜索
	this.sequentialSearch = function(item){
		for(let i=0; i<array.length; i++){
			if(item === array[i]){
				return i;
			}
		}
		return false;
	}

	// 二分搜索
	this.binarySearch = function(item){

		// 先进行排序
		this.quickSort();

		var low = 0,
			high = array.length - 1,
			mid, element;

		while(low <= high){
			mid = Math.floor((low + high) / 2);
			element = array[mid];
			if(element < item){
				low = mid + 1;
			}else if(element > item){
				high = mid - 1;
			}else{
				return mid;
			}
		}
		return false;
	}
}

var array = new ArrayList();
array.insert(3);
array.insert(5);
array.insert(1);
array.insert(6);
array.insert(4);
array.insert(7);
array.insert(2);
console.log(array.toString());

// 顺序查找
console.log(array.sequentialSearch(2));

// 二分查找
console.log(array.binarySearch(2));

// 快排
array.quickSort();
console.log(array.toString());
console.log(array.sequentialSearch(2));