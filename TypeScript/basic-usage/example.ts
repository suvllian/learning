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

let voidValue: void = undefined

function neverFun(): never {
  throw Error('异常')
}