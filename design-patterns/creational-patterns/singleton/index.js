	// 单例模式：限制类的实例化次数只能一次。
	var mySingleton = (function(){
		var instance;

		function init(){

			function privateMethod(){
				console.log("I am private");
			}

			var privateVariable = "I am private variable";
			var priavteRandomNumber = Math.random();

			return{
				publicMethod:function(){
					console.log("The public can see me!");
				},

				publicProperty:"I am public variable",

				getRandomNumber:function(){
					return priavteRandomNumber;
				}
			}
		};

		return{
			getInstance:function(){
				if(!instance){
					instance = init();
				}
				return instance;
			}
		}
	})();


	var singleA = mySingleton.getInstance();
	var singleB = mySingleton.getInstance();

	console.log(singleA.getRandomNumber() === singleB.getRandomNumber());  // true


	var myBadExample = (function(){
		var instance;

		function init(){
			var privateVariable = Math.random();

			return{
				getRandomNumber:function(){
					return privateVariable;
				}
			}
		}

		return{
			getInstance:function(){
				instance = init();
				return instance;
			}
		}
	})();

	var singleC = myBadExample.getInstance();
	var singleD = myBadExample.getInstance();

	console.log(singleC.getRandomNumber() !== singleD.getRandomNumber());  // true