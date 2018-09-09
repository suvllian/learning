# 一、基础知识

### 1.1 Python简介

#### 优点：
* 可移植性：无需任何修改就可以运行在Windows、linux等系统上。
* 易学易上手：语法简单，开源。
* 丰富的工具库：提供各种标准库，包括正则表达式、数据库、线程等等。

#### 缺点：
* 运行速度慢：python是解释型语言，相对于C语言，运行速度比较慢，因为需要在执行时编译成机器码。
* 不能加密：发布解释型语言程序实际上就是发布源代码。


### 1.2 输入和输出

输入：`input`；输出：`print`

``` python
  name = input('please input a char')
  print('hello world!')
```

### 1.3 变量和数据类型

#### 变量与常量

``` python 
  a = 5;
  PI = 3.1415936
```

#### 数据类型

* 整数
* 浮点数
* 字符串
* 布尔值：`True`、`False`
* 空值(none)

### 1.4 字符串和编码
计算机只能处理数字，如果要处理文本，只能先把文本转换成数字。在计算机中用8比特（bit）表示一个字节（byte），一个字节能表示的最大整数是255。  

最早只有127个字符被编码到计算机中，包括大小写英文字母、数字和一些符号，这个编码表被成为`ASCII`编码。

中文至少使用两个字节进行编码，所以中国制订了`GB2312`编码，把中文编进去。

由此诞生`Unicode`编码，把所有语言都统一到一套编码中，就不会出现乱码问题。通常`Unicode`用两个字节表示一个字符。现代操作系统和大多数编程语言都支持`Unicode`。  

所有语言统一成`Unicode`编码，存在一个问题，如果书写语言全部是英文，`Unicode`编码比`ASCII`编码需要多一倍存储空间，所以需要把`Unicode`编码转换成“可变长编码”的`UTF-8`编码。用`UTF-8`编码可以节省存储空间。

一个中文字符经过`UTF-8`编码通常占用3个字节，1个英文字符只占1个字节。

在计算机内存中，统一使用`Unicode`编码，需要保存到硬盘或者需要传输的时候，就转化成`UTF-8`编码。
用记事本编辑文件时，从文件读取的`UTF-8`编码被转换成`Unicode`字符到内存中，编辑完成后，保存时再把`Unicode`转换成`UTF-8`保存到文件。   
浏览网页时，服务器会把动态生成的`Unicode`内容转换成`UTF-8`再传输到浏览器。

* `ord()`：获取字符的整数表示。
* `chr()`：把编码转换成对应的字符。
* `len()`：计算字符串包含多少字符。
* `encode()`：字符串编码。
* `decode()`：字符串解码。

#### Basic usage

``` python
>>> ord('a')
97

>>> chr(97)
'a'

>>> 'abc'.encode('ascii')
abc

>>>len('中文')
6
```

Python源代码也是一个文本文件，所以当源代码中包含中文的时候，在保存源代码时，就需要务必指定保存为`UTF-8`编码。当Python解释器读取源代码时，为了让它按`UTF-8`编码读取，我们通常在文件开头写上这两行：

``` python 
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
```

#### 占位符

| 占位符 | 替换内容 |
| --- | --- |
|%d | 整数 |
|%f | 浮点数 |
%s | 字符串 |
|%x | 十六进制整数|

#### format()
``` python
>>>'hello,{0},I am {1}'.format('carol', 'demon')
'hello,carol,I am demon'
```

### 1.5 list和tuple
> list是python内置的一种数据类型，表示有序集合。

#### list的方法：

* `len()`：获取list元素的个数。
* `append()`：在list末尾添加元素。
* `pop()`：删除list末尾的元素，传入参数可删除指定位置的元素。
* `insert()`：插入元素到指定位置。

``` python
>>>names = ['tom', 'jack', 'mary']
>>>names
['tom', 'jack', 'mary']
```

> tuple也是有序列表，一旦初始化就不可修改。

因为tuple不可变，所以代码更安全。

### 1.6 条件判断

``` python
if age >= 20:
    print('hello')
elif age == 8:
    print('world')
else age <= 7:
    print('!')
```

### 1.7 循环
``` python
for i in list(range(5))
    print(i)
```

`range`：可以生成一个整数序列。

### 1.8 dict和set

> dict实际上就是map，使用键值对存储，查找速度快。

``` python
>>> d = { 'tom': 20, 'jack': 21, 'mary': 22 }

>>> d['tom']
20

>>> 'tom' in d
True

>>> d['carol'] = 20

>>>d.get('tom')
20

>>>d.get('tom', 1)
1
```

#### dict方法
* 如果key值不存在就会报错，可以通过`in`判断key是否存在。  
* `get(key)`方法：如果key不存在，就返回`None`，或者自己指定的value。  
* `pop(key)`方法：删除对应的value。

> set是一组key的集合，不存储value，且key值不能重复。

``` python
>>> s = set([1,1,2,2,3,3])
>>> s
{1, 2, 3}
```

#### set方法
* `add(key)`方法：添加元素，可重复添加，但是不会有效果。  
* `remove(key)`方法：可以删除元素。

``` python
def twoSum(nums, target):
	  if len(nums) <= 1:
	      return False
	  target_dict = {}
	  for i in range(len(nums)):
	      if nums[i] in target_dict:
	          return [target_dict[nums[i]], i]
	      else:
	          target_dict[target - nums[i]] = i

final = twoSum([2, 11, 15, 7], 9)
print(final)
```

# 二、函数

### 2.1 函数调用
> 函数调用时参数数量和参数类型必须正确。

### 2.2 内置函数

``` python
>>>int("123")
123

>>>int(12.34)
12

>>>float('12.34')
12.34

>>>str(12.3)
'12.3'

>>>str(100)
'100'

>>>bool(1)
True
```

#### 2.3 函数定义
``` python
def test(value):
   if value > 1:
       return True
   else: 
   	return False
```

> 可以用pass语句定义一个什么都不做的函数

```python
def nop():
    pass
```

* 如果函数没有返回语句，就会返回None。
* 函数可以返回一个值，但实际上是一个tuple。
