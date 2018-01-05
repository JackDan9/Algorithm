---
title: jackdan9_testPython
tags: jackdan9, test, python
author: jackdan9
---
# Some tests on python properties and introduce Python properties!

## Python的安装:
- jackdan在他的blog中会提及.
### 交互式解释器:
```
C:\Users\JackDan9>Python
Python 3.4.4 (v3.4.4:737efcadf5a6, Dec 20 2015, 20:20:57) [MSC v.1600 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>>
```
- Windows上的python安装完成之后在命令行下面输入`python`, 就会出现这样的情形, 前提是你在安装的时候像jackdan一样默认配置到path路径下就行了.
- 什么是交互式解释器:
    - 其实就是jackdan去**问候**它，然后它返回它的**问候**给jackdan.
```
>>> print("hello jackdan")
hello jackdan
>>>
```

------

### 数字和表达式:
#### 整数除法:
```
>>> 1/2
0
```
- 这是`Python 2.7.X`的版本系列, 但是`Python 3.X`的默认就是
```
>>> 1/2
0.5
```
- 如果你的是`Python 2.7.X`的版本系列, 你不用更改版本系列, 只要前面增加一行代码:
```
>>> from __future__ import division
>>> 1/2
0.5
```
- 当然如果你想在`Python 3.X`的版本系列中整数整除, 可以如下这样:
```
>>> 1//2
0
```
#### 幂运算符:
```
>>> 2 ** 3
8
>>> -3 ** 2
-9
>>> (-3) ** 2
9
```
- 幂运算符比取反运算符(一元减运算符)的优先级更高, 所以才有如上的结果.
#### 长整型数:
```
>>> 1987163987163981639186L * 1987163987163981639186L + 23
3948820711881452984866184367154127490742619L
```
- 长整形和普通的整数可以混合使用. 在绝大多数情况下, 不用担心长整形数字和整数的区别, 除非需要进行类型检查.
#### 十六进制和八进制:
```
>>> 0xAF
175
>>> 010
8
```

------

### 变量:
- 变量基本上就是代表(或者引用)某值的名字.
```
>>> x = 2
```
- 这样的操作称为`赋值(assignment)`, 值3赋给了变量x.还有另外一种说法就是: 将变量x绑定到了值(或者对象)3上面.
```
>>> x * 2
6
```
- 这就可以使用这个变量了, 对它进行一系列值的运算.
- 需要注意的是, 在使用变量之前, 需要对其赋值. 毕竟使用没有值的变量也没有意义.

------

### 语句:
- 表达式是**某事**, 而语句是**做某事**(告诉计算机做某事).
```
>>> 2*2
4
>>> print(2*2)
4
```
- 如果在交互式解释器中执行上述两行代码, 结果都是一样的. 这只是因为解释器总是把所有表达式的值打印出来而已.
```
>>> x = 3
>>>
```
- 语句和表达式之间的区别在赋值时会表现得更加明显一些. 

------

### 获取用户输入:
- `input`函数:
```
>>> input("The meaning of life: ")
The meaning of life: 42
42
```
- `input`语句的结果值就是jackdan输入的数字, 它自动在最后一行被打印出来.
``` python
>>> x = input("x: ")
x: 34
>>> y = input("y: ")
y: 42
>>> print(x * y)
1428
```
- `if`条件语句, 可以简单地把这个条件放在`if`后面, 然后用冒号将其和后面的语句隔开`:`
```
>>> if 1 == 2: print("One equals two")
...
>>> if 1 == 1: print("One equals one")
...
One equals one
```
- 如果变量`time`绑定到当前时间的分钟数上, 那么可以使用下面的语句检查是不是到了"整点".
``` python
>>> if time % 60 == 0: print("On the hour!")
```

------

### 函数:
- 幂运算符`(**)`来计算乘方. 但是事实上也可以用**函数**来代替运算符, 这个函数就是`pow`:
``` python
>>> 2**3
8
>>> pow(2, 3)
8
```
- **函数**就像可以用来实现特定功能的小程序一样. 上述过程使用函数的方式叫做**调用函数**.

------

## `hello.py`:
```
# -*- coding: utf-8 -*-
name = input("What is your name ?")
print("Hello. " + name + "!")
```
- 运行在命令行中:
```
C:\projects\C\jackdan9_Python\jackdan9_testPython\jackdan9_helloworld>python hello.py
What is your name ?"jackdan"
Hello. jackdan!
```
- `raw_input`和`input`的区别在jackdan的blog文章中涉及到了.


------

## Python编码:
```
# -*- coding: uft-8 -*-
```
- Python默认是以UTF-8进行编码的，如果想要支持其他的编码格式可以另外声明. 如:
```
# -*- coding: encoding -*-
```
- 将源文件中所有的字符视为`encoding`而不是`utf-8`.
```
# -*- coding: cp1252 -*-
```
- 将源文件中的所有字符视为`Windows-1252`而不是`utf-8`.

