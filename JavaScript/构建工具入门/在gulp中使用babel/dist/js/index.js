"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var hello = "test";
var mahi = "test2";

var array = [];

sayHi = function sayHi() {
	return console.log("hello world");
};

isObject = function isObject(obj) {
	return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" ? true : false;
};
var mary = "jack";