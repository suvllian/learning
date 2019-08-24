// 对象字面量定义的模块

var myModule = {
	myProperty:"someValue",

	myConfig:{
		language:"en",
		isShow:true
	},

	myMethod:function(){
		console.log("Hello!");
	},

	myMethod2:function(){
		console.log("Show : " + (this.myConfig.isShow)?"Show":"Hide");
	},

	myMethod3:function(newConfig){
		if(typeof newConfig === "object"){
			this.myConfig = newConfig;
			console.log(this.myConfig.language);
		}
	}
};

myModule.myMethod();

myModule.myMethod2();

myModule.myMethod3({
	language:"chinese",
	isShow:false
});

// Module模式

var TestModule = (function(){
	var counter = 0;

	return{
		incrementCounter:function(){
			return ++counter;
		},
		resetCounter:function(){
			console.log("counter value is:"+counter);
			counter = 0;
		}
	};
})();

TestModule.incrementCounter();
TestModule.resetCounter();


// 示例2
var BasketModule = (function(){
	var basket = [];
	function doSomeThingPrivate(){

	}

	return{
		addItem:function(values){
			basket.push(values);
		},
		getItemCount:function(){
			return basket.length;
		},

		doSomeThing:doSomeThingPrivate,

		getTotal:function(){
			var itemCount = this.getItemCount(),
			total = 0;
			while(itemCount--){
				total += basket[itemCount].price;
			}
			return total;
		}
	};
})();

BasketModule.addItem({
	item:"bread",
	price:0.5
});

BasketModule.addItem({
	item:"water",
	price:1
});

console.log(BasketModule.getItemCount());
console.log(BasketModule.getTotal());
//下面两项会报错
//console.log(BasketModule.basket);
//console.log(basket);