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
- 过程中可以提供**参数**, 它会**返回值**给用户. 当然jackdan可以使用函数调用和运算符来创建更复杂的表达式:
```python
>>> 10 + pow(2, 3*5)/3.0
10932.666666666666
```
- 事实上, 也可以自己定义函数. 通常会把`pow`等标准函数称为**内建函数**.可以用于数值表达式的其他内建函数:
- `abs`: 得到数的绝对值函数;
```python
>>> abs(-10)
10
```
- `round`: 把浮点数四舍五入为最接近的整数值;
```python
>>> round(1.0/2.0)
1.0
```
- 整数除法总是会把截除结果的小数部分, 而`round`函数则会将结果四舍五入为最接近的整数.
- 如果是年龄的这样的数就不能使用`round`函数, 因为jackdan是`21.8`, 如果使用`round`函数就会变成`22`, 这并不是jackdan想要看到的, 所以可以使用`floor()`向下取整函数, 但是这样的函数不能直接用.
```python
>>> round(21.8)
22.0
>>> floor(21.8)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'floor' is not defined
```

------

### 模块:
- 可以把模块想象成导入到Python以增强器功能的扩展. 需要使用特殊的命令`import`来导入模块.
- `floor`函数就是`math`模块之中的.
```python
>>> import math
>>> math.floor(21.8)
21.0
```
- 用`import`导入模块, 然后按照`"模块.函数"`的格式(表示的是`"模块的函数"`)进行使用. 
- jackdan感觉自己的年龄是浮点数看起来也很奇怪.
```python
>>> int(math.floor(21.8))
21
```
- 当然`int`函数/类型把参数转换成整数时会自动向下取整, 所以在转换过程中, `math.floor`是多余的, 可以直接:
```
>>> int(21.8)
21
```
- 类似于`int`函数的(可以将输入数转换为其他类型)还是`long`和`float`.
- `int`, `long`, `float`它们并不完全是普通的函数——它们是**类型对象(`type object`)**.
- 与`floor`函数相对的是`ceil`(`ceiling`的简写)函数, `ceil`函数可以将给定的数值转换成大于或等于它的最小整数.
```
>>> import math
>>> math.ceil(21.1)
22.0
```
- jackdan觉得每次都要写上`math`感觉很费劲, 所以jackdan换了一种引用模块的方式.
```python
>>> from math import sqrt
>>> sqrt(9)
3.0
```
- 使用了**"from模块import函数"**这种形式的`import`命令之后, 就可以直接使用函数, 而不需要模块名作为前缀了.
- 当然,jackdan也有其他的方法, 可以使用变量来引用函数(或者Python之中绝大多数对象).
```python
>>> import math
>>> foo = math.sqrt
>>> foo(9)
3.0
>>> foo(16)
4.0
```

#### `cmath`和**复数**:  
- `sqrt`是求平方根的函数, 如果它的参数是一个负数了.
```python
>>> foo(-1)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: math domain error
```
- 或者, 在其它其他平台下:
```
>>> foo(-1)
nan
```
- `nan`是一个特殊值的简写, `"not a number"`(非数值).
- `sqrt`函数不能处理附属的平方根, 因为负数的平方根是一个虚数, 而虚数(以及复数[实数和虚数之和])是完全不同的——这也是另外一个叫做`cmath`(即complex math, 复数)的模块来实现这些功能的原因.
```python
>>> import cmath
>>> cmath.sqrt(-1)
1j
```
- jackdan在这里并没有使用`from...import`的引用语句. 因为一旦一旦使用了这个语句, 就没法使用普通的`sqrt`函数了.
- 所以, 除非真的需要from这个形式的模块来导入语句, 否则应该坚持使用普通的`import`.
- `1j`是虚数, 虚数均以`j`(或者J)结尾, 就像长整形数用`L`一样.
```python
>>> (1+3j) * (9+4j)
(-3+31j)
```
- Python本书就提供了对于复数的支持(Python中没有单独的虚数类型, 单独的虚数类型被看作实数部分为0的复数{`1j` <->(0+1j)}).

------

### 保存并执行程序:
- 交互式解释器是Python的强项之一, 它让实时检验解决方案并且体验这门语言成为了现实.
- 但是, 在交互式解释器里面输入的一切都会在它退出的时候丢失.
- jackdan知道大家想做的事情其实就是编写自己和他人都能运行的程序. 首先需要一个文本编辑器来编写程序代码, `Sublime text`和`atom`都不错的, 如果你用了`IDLE`也行的,`File->New Window`方式创建一个新的编辑窗口即可.
- `hello.py`:
```
# -*- coding: utf-8 -*-
name = input("What is your name ?")
print("Hello. " + name + "!")
```
- 编写好以上代码, `File-Save`保存程序(这个其实就是一个纯文本文件), 保存的目录确定你能找到`C:\projects\C\jackdan9_Python\jackdan9_testPython\jackdan9_helloworld>`, 文件名取一个有意义的文件名`hello.py`.
- `File->Run`或者`Crtl+F5`键来运行程序(如果没有IDEL, 不用着急, jackdan在命令行中的运行也会进行叙述).
- 如果已经关了文件, 可以通过`File->Open`重新打开这个文件.

#### 运行在命令行中:
```
C:\projects\C\jackdan9_Python\jackdan9_testPython\jackdan9_helloworld>python hello.py
What is your name ?"jackdan"
Hello. jackdan!
```
- `raw_input`和`input`的区别在jackdan的blog文章中涉及到了.

#### 让脚本像普通程序一样运行:
- 有时候希望像运行程序(Web浏览器, 文本编辑器)一样去运行Python程序(也被称为脚本), 而不需要显示地使用Python解释器. 在`UNIX`中就有一个标准的做法.
```
#!/usr/bin/env python
```
- 在脚本首部前面加`#!`(叫做`pound bang`或者`shebang`), 在其后加上用于解释脚本的程序的绝对路径.
- 在实际运行脚本之前, 必须让脚本文件具有**可执行**的属性:
```
$ chmod a+x hello.py
```
- 现在就能运行代码了.
```
$ hello.py
```

#### 注释:
- 井号`#`在Python中有特殊的含义. 在程序代码中输入它的时候, 它右边的一切都会被忽略.

------

### 字符串:
- 字符串在几乎所有真实可用的`Python`程序中都会存在, 并且有多种用法, 其中最主要的用法就是表示一些文本——"Hello, Python!".

#### 单引号字符串和转义引号:
- 在Python中, 字符串是值, 就像数字一样:
```python
>>> "Hello, JackDan"
'Hello, JackDan'
```
- 当Python打印出字符串的时候, 是用单引号`''`括起来的, 但在程序中用的是双引号`""`.
```
>>> "Let's go!"
"Let's go!"
>>> '"Hello, JackDan!" she said'
'"Hello, JackDan!" she said' 
```
- `Let's go!`包含了一个单引号`'`(这里应该是叫撇号`'`), 这时候也就不能再用单引号将整个字符串括起来了.否则会:
```python
>>> 'Let's go!'
  File "<stdin>", line 1
    'Let's go!'
         ^
SyntaxError: invalid syntax
```
- 在这里的字符串是"Let", Python并不知道如何处理后面的s(也就是`s, go!`).
- `'"Hello, JackDan!" she said'`就是单引号和双引号结合起来使用可以解决以上的报错, 但是也可以使用反斜线`\`对字符串中的引号进行转义:
```
>>> 'Let\'s go!'
"Let's go!"
``` 
- Python会明白中间的单引号是字符串中的一个字符, 而不是字符串的**结束标记**(即便如此, Python也会在打印字符串的时候使用双引号).
```python
>>> "\"Hello, JackDan!\" she said"
'"Hello, JackDan!" she said'
```
- **转义字符**`\`是非常有用的, 因为有时候是避免不了的.
```
>>> 'Let\'s say "Hello, JackDan!"'
'Let\'s say "Hello, JackDan!"'
```

#### 拼接字符串:
- 另一种方式输出同样的字符串:
```python
>>> "Let's say" '"Hello, JackDan!"'
'Let\'s say"Hello, JackDan!"'
```
- 用一个字符串接着另一个字符串的方式写了两个字符串, Python就会去自动拼接它们.
```python
>>> x = "Hello, "
>>> y = "World!"
>>> x y
  File "<stdin>", line 1
    x y
      ^
SyntaxError: invalid syntax
```
- 可以看得出以上并不是拼接字符串的方法, 而是书写字符串的一种特殊方法.
```
>>> "Hello, " + "JackDan!"
'Hello, JackDan!'
>>> x = "Hello, "
>>> y = "JackDan!"
>>> x + y
'Hello, JackDan!'
```

#### 字符串表示,  `str`和`repr`:
```python
>>> "Hello, JackDan!"
'Hello, JackDan!'
>>> 1000L
1000L
>>> print("Hello, JackDan!")
Hello, JackDan!
>>> print(1000L)
1000
```
- 所有通过Python打印出来的字符串还是被引号括起来的. 这是因为Python打印值的时候会保持该值在Python代码中的状态, 当然这并不是jackdan希望大家看到的状态. 但是使用`print`语句, 结果就可以了.
- `str`函数: 把值转换为合理形式的字符串, 以便用户可以理解.
- `repr`函数: 会创建一个字符串, 它以合法的Python表达式的形式来表示值.
```python
>>> print(repr("Hello, JackDan!"))
'Hello, JackDan!'
>>> print(repr(1000L))
1000L
>>> print(str("Hello, JackDan!"))
Hello, JackDan!
>>> print(str(1000L))
1000
```
- `repr(x)`函数的功能也可以用**`x`**实现(注意,这里是反引号, 而不是单引号).
```
>>> print("The temperature is " + temp)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: cannot concatenate 'str' and 'int' objects
>>> print("The temperature is " + `temp`)
The temperature is -1
>>> print("The temperature is " + repr(temp))
The temperature is -1
```
- 在Python 3.0中, 已经不再使用反引号了. 因此, 即使咋旧的代码中看到了反引号, 也应该坚持使用`repr`.

#### 长字符串、原始字符和`Unicode`:
- **长字符串**:
- `''' ... '''`跨多行的长字符串.
```
>>> print('''This is a very long string.
... It continues here.
... And it's not over yet.
... "Hello, JackDan!"
... Still here.''')
This is a very long string.
It continues here.
And it's not over yet.
"Hello, JackDan!"
Still here.
```
- 也可以使用三个双引号的. 同时, 因为这种特殊的引用方式, jackdan也可以在字符串之中同时使用单引号和双引号, 而不需要使用反斜线进行转义.
- 普通字符也可以跨行. 如果一行之中最后一个字符是**反斜线**, 那么, 换行符本身就"转义"了, 也就是被忽略了.
```python
>>> "Hello, \
... JackDan!"
'Hello, JackDan!'
>>> 1 + 2 + \
... 4 + 5
12
>>> print(
... 'Hello, JackDan!'
... )
Hello, JackDan!
>>> print\
... ('Hello, JackDan!')
Hello, JackDan!
```
- **原始字符串**:
- **原始字符串**对于反斜线的使用并不会过分挑剔.
```python
>>> path = 'C:\nowhere'
>>> path
'C:\nowhere'
>>> print(path)
C:
owhere
>>> print('C:\\nowhere')
C:\nowhere
```
- 两条反斜线中的第一条是对于`\n`的转义.这样的写发达到了想要的打印效果,但是如果非常长了:
```
>>> 'C:\\projects\\C\\jackdan9_Python\\jackdan9_testPython\\jackdan9_helloworld'
```
- 这样就会写很多的`\`, 对于JackDan真是一个伤脑经的活,所以:
```
>>> path = r'C:\projects\C\jackdan9_Python\jackdan9_testPython\jackdan9_helloworld'
```
- **原始字符串`r`**就应用而生了. 看起来可以在原始字符串中放入任何字符.
```python
>>> print(r"This is illegal\")
  File "<stdin>", line 1
    print(r"This is illegal\")
                             ^
SyntaxError: EOL while scanning string literal
```
- 但是不能在原始字符结尾输入反斜线. 因为不知道转义符号(也就是反斜线)是否是结束符号. 所以也要对这个反斜线`\`进行转义.
```
>>> print(r"This is illegal\\")
This is illegal\\
```
- 但是这样转义多出了一条反斜线`\`.
```python
>>> print(r"This is illegal" "\\")
This is illegal\
```

#### Unicode字符串:
- 字符串常量的最后一种类型就是`Unicode`字符串(或者称为`Unicode`对象——与字符串并不是同一个类型).
- Python中普通字符在内部是以`8`位的ASCII码形式存储的, 而Unicode字符串则存储为16位Unicode字符.
```
>>> u'Hello, JackDan!'
u'Hello, JackDan!'
```
- 类似与原始字符串的用法, 只不过前面加一个`u`而已.

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

------

## 数据结构:
- 数据结构是通过某种方式(例如对元素进行编号)组织在一起的数据元素的集合. 这些数据元素可以是数字或者字符, 甚至可以是其他数据结构.
- 在Python中, 最基本的数据结构是**序列**(`sequence`).
- 序列中的每个元素被分配一个序号——即元素的位置, 也被称为**索引**.
- 第一个索引是`0`, 第二个是`1`, 倒数第一个是`-1`, 倒数第二个是`-2`, 以此类推.

### 序列概览:
- **序列种类:**
	- 列表;
	- 元组;
	- 字符串;
	- `Unicode`编码;
	- `buffer`对象;
	- `xrange`对象.
- 列表和元组的主要区别在于, 列表可以修改, 元组则不能.
- Python之中还有一种名为容器(`container`)的数据结构. 容器基本上是包含其他对象的任意对象.
- 序列(例如列表和元组)和映射(例如字典)是两类主要的容器.
- 序列中的每个元素都有自己的编号, 而映射中的每个元素则有一个名字(也称为键).
