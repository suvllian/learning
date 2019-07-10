"use strict";
exports.__esModule = true;
var enum_1 = require("./enum");
/**
 *  基础类型
 */
var isDone = false;
var count = 4;
var apple = 'apple';
var nullVar = null;
var undeVar = undefined;
var countArray = [1, 2];
var tupleVar;
var result = {
    value: 1
};
var color = enum_1.Color.Blue;
var anyValue = 123;
// 不表示任何类型
var voidValue = undefined;
// never类型是任何类型的子类型，也可以赋值给任何类型
function neverFun() {
    throw Error('异常');
}
var abundant;
abundant = 1111;
// 接口
// 1、简单用法
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
// 2、解构赋值
function printLabel1(_a) {
    var label = _a.label;
    console.log(label);
}
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
// function
function tsFunction(val1, val2) {
    return val1 + val2;
}
// 泛型
function indentify(arg) {
    return arg;
}
