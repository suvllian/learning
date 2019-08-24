 // 基本构造器

 function Car(model,year,miles){
 	this.model = model;
 	this.year  = year;
 	this.miles = miles;

 	this.toString = function(){
 		return this.model + this.year + this.miles + "String";
 	}
 }

 var mondeo = new Car("Ford",2007,5000);
 console.log(mondeo.toString());


// 带原型的构造器

function PCar(model,year,miles){
	this.model = model;
	this.year  = year;
	this.miles = miles;
}

PCar.prototype.toString = function(){
		return this.model + this.year + this.miles + "String";
	}

var Auto = new PCar("Auto",2010,5000);
console.log(Auto.toString());