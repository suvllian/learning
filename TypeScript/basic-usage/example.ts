import { Color } from './enum'
 
/**
 *  基础类型
 */
let isDone: boolean = false

let count: number = 4

let apple: string = 'apple'

let nullVar: null = null

let undeVar: undefined = undefined

let countArray: number[] = [1, 2]

let tupleVar: [number, string, boolean]

let result: object = {
  value: 1
}

let color: Color = Color.Blue

let anyValue: any = 123

// 不表示任何类型
let voidValue: void = undefined

// never类型是任何类型的子类型，也可以赋值给任何类型
function neverFun(): never {
  throw Error('异常')
}

let abundant: string | undefined | number 
abundant = 1111


// 接口
// 1、简单用法
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

// 2、解构赋值
function printLabel1({ label }: { label: string }) {
  console.log(label);
}

// 3、接口定义
interface LabelValue {
  label: string,
  value? : number,
  readonly size: number
}
function printLabel2(labelledObj: LabelValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" }
printLabel(myObj)

// function

function tsFunction(val1: string, val2?: number) : string {
  return val1 + val2
}

// 泛型
function indentify<T>(arg: T): T {
  return arg
}

