function ArrayList(){
	var array = [];

	function swap(index1,index2){
		var temp = array[index1];
		array[index1] = array[index2];
		array[index2] = temp; 
	}

	this.insert = function(item){
		array.push(item);
	}

	this.toString = function(){
		return array.join();
	}

	// 冒泡排序
	this.bubbleSort = function(){
		var length = array.length;
		for(let i=0; i<length; i++){
			for(let j=0; j<length-1-i; j++){
				if(array[j] > array[j+1]){
					swap(j,j+1);
				}
			}
		}
	}

	// 选择排序
	this.selectionSort = function(){
		var length = array.length,
			indexMin;
		for(let i=0; i<length-1;i++){
			indexMin = i;
			for(let j=i; j<length; j++){
				if(array[indexMin] > array[j]){
					indexMin = j;
				}
			}
			if(i !== indexMin){
				swap(i, indexMin);
			}
		}
	}

	// 插入排序
	this.insertionSort = function(){
		var length = array.length,
			j,temp;
		for(let i=0; i<length; i++){
			temp = array[i];
			j = i;
			while(j > 0 && array[j-1] > temp){
				array[j] = array[j-1];
				j--;
			}
			array[j] = temp;
		}
	}

	// 归并排序
	this.mergeSort = function(){
		array = merageSortRec(array);
	}

	var merageSortRec = function(array){
		var length = array.length;
		if (length === 1){
			return array;
		}
		var mid = Math.floor(length / 2),
			left = array.slice(0, mid),
			right = array.slice(mid, length);

		return merge(merageSortRec(left), merageSortRec(right));
	}

	var merge = function(left,right){
		var result = [];
	    while(left.length > 0 && right.length > 0) {
	        if(left[0] < right[0]) {
	            result.push(left.shift());
	        } else {
	            result.push(right.shift());
	        }
	    }
	    /* 当左右数组长度不等.将比较完后剩下的数组项接起来即可 */
	    return result.concat(left).concat(right);
	}

	// 快速排序
	this.quickSort = function(){
		quick(array, 0, array.length-1);
	}

	var quick = function(array, left, right){
		var index = partition(array, left, right);
		console.log(index);
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
array.quickSort();
console.log(array.toString());