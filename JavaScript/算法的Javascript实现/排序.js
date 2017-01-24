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
}

var array = new ArrayList();
array.insert(1);
array.insert(32);
array.insert(5);
array.insert(58);
array.insert(12);
console.log(array.toString());
array.mergeSort();
console.log(array.toString());