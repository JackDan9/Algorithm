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
- 列表和元组的主要区别在于, **列表**可以**修改**, **元组**则**不能**.
- Python之中还有一种名为容器(`container`)的数据结构. 容器基本上是包含其他对象的任意对象.
- 序列(例如列表和元组)和映射(例如字典)是两类主要的容器.
- 序列中的**每个元素**都有**自己的编号**, 而映射中的**每个元素**则有**一个名字**(也称为**键**).
- **集合(`Set`)**既不是**容器**也不是**映射的容器类型**.

### 通用序列操作:
- 所有序列类型都可以进行类型某些特定的操作.包括:
  - **索引**(indexing);
  - **分片**(sliceing);
  - **加**(adding);
  - **乘**(multiplying);
  - **成员资格**(判断某个元素是否属于序列的成员);
  - 计算序列长度以及找出最大元素和最小元素的内建函数;
  - 迭代(iteration){对序列进行迭代的意思是: 依次对序列中的每个元素重复执行某些操作.};

#### 索引(indexing):
- 序列中的所有元素都是有编号的——从0开始递增.
```python
>>> greeting = 'Hello, JackDan'
>>> greeting[0]
'H'
```
- 字符串就是一个由字符组成的序列. 索引0指向第一个元素. 所以`greeting[0]`打印出`H`.
- 可以通过索引获取元素. 所有序列都可以通过这种方式进行索引. 使用负数索引时, Python会从右边, 也就是从最后一个1个元素开始计数. 最后1个元素的位置编号是-1(不是-0, 因为-0就是0那样就会和第一个元素重合).
```python
>>> greeting[-1]
'n'
```
- 字符串字面值能够直接使用索引, 而不需要一个变量引用它们. 两种做法的效果是一样的.
```python
>>> 'Hello, JackDan[1]'
'e'
```
- 如果一个函数调用返回一个序列, 那么可以直接对返回结果进行**索引操作**.
```python
>>> fourth = input('Year: ')[3]
Year: 2018
>>> fourth
'8'
```
- 索引示例:
```python
# -*- coding: utf-8 -*-
# 根据给定的年月日以数字形式打印出日期
months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

endings = ['st', 'nd', 'rd'] + 17 * ['th'] + ['st', 'nd', 'rd'] + 7 * ['th'] + ['st']

year = raw_input('Year: ')
month = raw_input('Month(1-12): ')
day = raw_input('Day(1-31): ')

month_number = int(month)
day_number = int(day)

month_name = months[month_number-1]
ordinal = day + endings[day_number-1]

print(month_name + ' ' + ordinal + '. ' + year)
```
- 运行结果:
```python
Year: 2018
Month(1-12): 1
Day(1-31): 9
January 9th. 2018

```
- 最后一行是程序的输出.

#### 分片:
- 与使用索引来访问单个元素类似, 可以使用**分片**操作来访问一定范围内的元素. 分片通过冒号`:`相隔的**两个索引**来实现.
```python
>>> tag = '<a href="http://www.python.org">Python web site</a>'
>>> tag[9:30]
'http://www.python.org'
>>> tag[32:-4]
'Python web site'
```
- 分片操作对于提取序列的一部分是很有用的. 而编号在这里显得尤为重要.
- 第一个索引需要提取的是第1个元素的编号, 而最后的索引则是分片之后剩下部分的第1个元素的编号.
```python
>>> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
>>> numbers[3:6]
[4, 5, 6]
>>> numbers[0:1]
[1]
```
- 分片操作的实现需要提供两个索引作为边界, 第1个索引的元素是包含在分片内的, 而第2个则不包含在分片内.
- **优雅的捷径**：
- 假设需要访问最后3个元素, 那么当然可以进行显式的操作:
```python
>>> numbers[7:10]
[0, 9, 10]
```
- 现在, 索引10指向的是第11个元素——这个元素并不存在, 却是在最后一个元素之后.
- 所以,这样的做法是可行的.
```python
>>> numbers[-3:-1]
[8, 9]
```
- 由此可见, 并不能以这种方式访问最后一个元素. 那么使用索引0作为最后一步的下一步操作所使用的元素, 结果又是什么？
```python
>>> numbers[-3, 0]
[]
```
- 很明显, 以上打印的结果不是我们心中想要的. 实际上, 只要分片中**最左边的索引**比它**最右边的** **晚出现**在序列中, 结果就是一个空的序列.
- 如果分片所得部分包括序列结尾元素, 那么, 只需置空最后一个索引即可:
```python
>>> numbers[-3:]
[8, 9, 10]
``` 
- 当然, 此类方法也适合序列的开始的元素.
```python
>>> numbers[:3]
[1, 2, 3]
```
- 实际上, 如果需要复制整个序列, 可以将两个索引都置空.
```python
>>> numbers[:]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

```
- 分片代码:
```python
# -*- coding:utf-8 -*-

url = raw_input('Please enter the URL:')
domain = url[11:-4]

print("Domain name: " + domain)
```
- 运行结果:
```python
gmentation.py
Please enter the URL:http://www.something.com
Domain name: something

```
- **更大的步长**:
- 进行分片的时候, 分片的开始和结束点需要进行指定(不需要直接还是间接).
- 在Python中还有另外一个参数——**步长**(step length)——通常都是隐式设置的.
- 在普通的分片中, 步长是`1`——分片操作就是按照这个步长**逐个遍历序列的元素,** 然后返回开始和结束点之间的所有元素.
```python
>>> numbers[0:10:1]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

```
- 分片中包含一个数字. 没错, 这就是**步长**的显式设置. 如果步长被设置为比`1`大的数, 那么就会跳过某些元素.
```python
>>> numbers[0:10:2]
[1, 3, 5, 7, 9]
>>> numbers[3:6:3]
[4]

```
- 如果需要将每4个元素中的第1个提取出来, 那么只要将步长设置为4即可:
```python
>>> numbers[::4]
[1, 5, 9]

```
- 步长不能为`0`——那不会向下执行——但步长可以是**负数**, 即从右到左提取元素:
```python
>>> numbers[8:3:-1]
[9, 8, 7, 6, 5]
>>> numbers[10:0:-2]
[10, 8, 6, 4, 2]
>>> numbers[0:10:-2]
[]
>>> numbers[::-2]
[10, 8, 6, 4, 2]
>>> numbers[5::-2]
[6, 4, 2]
>>> numbers[:5:-2]
[10, 8]
```
- 开始点的元素(最左边元素)包括在结果之中, 而结束点的元素(最右边的元素)则不在分片之内. 
- 当使用一个负数作为步长时, 必须让开始点(开始索引)**大于**结束点.
- 对于一个**正数步长**, Python会从序列的**头部开始向右提取元素,** 直到最后一个元素; 而对于**负数步长**, 则是从**序列的尾部开始向左提取元素,**  直到第一个元素.

#### 序列相加:
- 通过使用加号可以进行序列的连接操作:
```python
>>> [1, 2, 3] + [4, 5, 6]
[1, 2, 3, 4, 5, 6]
>>> 'Hello. ' + 'world!'
'Hello. world!'
>>> [1, 2, 3] + 'world!'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: can only concatenate list (not "str") to list
>>>
```
- 正如错误信息所提示的, **列表**和**字符串**是无法连接在一起的, 尽管它们都是序列.
- 两个相同类型的序列才能进行操作.

#### 乘法:
- 用数字`x`乘以一个序列会生成的序列, 而在新的序列中, 原来的序列将被重复`x`次.
```python
>>> 'python' * 5
'pythonpythonpythonpythonpython'
>>> [42] * 10
[42, 42, 42, 42, 42, 42, 42, 42, 42, 42]
>>>
```
- **None, 空列表和初始化**.
- 空列表可以简单地通过两个中括号进行表示`([])`——里面什么东西都没有.
- `None`是一个Python的内建值, 它的确切含意是"这里什么也没有".
```python
>>> sequence = [None] * 10
>>> sequence
[None, None, None, None, None, None, None, None, None, None]
>>>
```
- 代码可能看起来很复杂, 但只使用基本的算法——计算出有多少空格、破折号等字符, 然后将它们放置到合适的位置即可.
```python
# -*-coding: utf-8 -*-

sentence = raw_input("Sentence: ")

screen_width = 80
text_width = len(sentence)
box_width = text_width + 6
left_margin = (screen_width - box_width) // 2

print()
print(' ' * left_margin + '+' + '-' * (box_width-2) + '+')
print(' ' * left_margin + '|' + ' ' * text_width + '|')
print(' ' * left_margin + '|' +        sentence + '|')
print(' ' * left_margin + '|' + ' ' * text_width + '|')
print(' ' * left_margin + '+' + '-' * (box_width-2) + '+')
print()
```
- 运行结果:
```python
Sentence: He's a very naughty boy!
()
                         +----------------------------+
                         |                        |
                         |He's a very naughty boy!|
                         |                        |
                         +----------------------------+
()

```

#### 成员资格：
- 为了检查一个值是否在序列中, 可以使用`in`运算符。
- `in`运算符和之前讨论过的(例如`+`, `*`运算符)有一点不同。
- `in`运算符检查某个条件是否为真, 然后返回相应的值:
  - 条件为真返回`True`;
  - 条件为假返回`False`;
- (条件为真返回`True`, 条件为假返回`False`)这样的运算符叫做**布尔运算符(`boolean`)**。
- **布尔运算符(boolean)**的真值叫做**布尔值**。
```python
>>> permissions = 'rw'
>>> 'w' in permissions
True
>>> 'x' in permissions
False
>>> users = ['mlh', 'foo', 'bar']
>>> raw_input('Enter your user name: ') in users
Enter your user name: mlh
True
>>> subject = '$$$ Get rich now!!!! $$$'
>>> '$$$' in subject
True
>>>
```
- 在UNIX系统中:
```python
>>> permissions = 'rw'
>>> 'w' in permissions
```
- 这两行代码可以作为查看文件可写和可执行权限的脚本。
```python
# -*- coding:utf-8 -*-
# Check username and PIN code.

database = [
    ['jackdan', '1234'],
    ['jackdan9', '4242'],
    ['jack', '7524'],
    ['dan', '9843']
]
username = raw_input('User name: ')
pin = raw_input('PIN code: ')

if [username, pin] in database:
    print('Access granted')
```
- 运行结果:
```python
>Python isIn.py
User name: jackdan
PIN code: 1234
Access granted

```
```python
>Python isIn.py
User name: jackdan
PIN code: 12345
```
- 以上判断用户输入的用户名和PIN码是否存在于数据库中(实际上是一个列表)中的程序。
- 如果用户名/PIN码这一数值对存在于数据库中, 那么就在控制台上打印`'Access granted'`, 反之则打印空。

#### **长度、最小值和最大值**:
- 内建函数`len`, `min`和`max`非常有用。
-2- `len`函数返回序列中所包含元素的数量; 
-2- `min`函数返回序列中的最小的元素;
  - `max`函数则分别返回序列中的最大的元素.
```python
>>> numbers = [205, 250, 520]
>>> len(numbers)
3
>>> min(numbers)
205
>>> max(numbers)
520
>>> max(2, 3)
3
>>> min(9, 3, 2, 5)
2
>>>
```
- 最后两行代码中的表达式:
```python
>>> max(2, 3)
3
>>> min(9, 3, 2, 5)
2
>>>
```
- `max`函数和`min`函数的参数并不是一个序列, 而是以多个数字直接作为参数。

------

### 列表: Python的**"苦力"**
- 列表不同于元组和字符串的地方:
  - 列表是可变的(mutable) —— 可以改变列表的内容, 并且列表有很多有用的、专门的方法.

#### `list`函数:
- 因为字符串不能像列表一样被修改, 所以有时候需要根据字符串创建列表。
- `list`函数可以实现上面的这个操作:
```python
>>> list('Hello, JackDan')
['H', 'e', 'l', 'l', 'o', ',', ' ', 'J', 'a', 'c', 'k', 'D', 'a', 'n']
```
> 注意, `list`函数适用于所有类型的序列, 而不只是字符串。

#### 基本的列表操作：
- **列表**可以使用任何适用于**序列**的**标准**操作, 例如:
  - **索引**;
  - **分片**;
  - **连接**;
  - **乘法**;
- **列表**是可以修改的。可以改变列表的方法:
- **改变列表: 元素赋值**
- 需要使用**索引**来标记为某个**特定的**、**位置明确的**元素赋值。如:
```python
>>> x = [520, 520, 520]
>>> x[1] = 250
>>> x
[520, 250, 520]
>>>
```
- 当然不能为一个位置不存在的元素进行赋值。如:
```python
>>> x[100] = 250
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list assignment index out of range
>>>
```
- **删除元素**
- 使用`del`语句来删除列表中的语句。如:
```python
>>> names = ['jackdan', 'jackdan9', 'jack', 'dan', 'dan9']
>>> del names[2]
>>> names
['jackdan', 'jackdan9', 'dan', 'dan9']
>>>
```
- `del`语句删除了列表中的`jackdan9`元素, 并且改变了列表的长度(从`5`变到`4`)。
- **分片赋值**:
- **分片**是一个非常强大的特性, **分片赋值**操作则更加显现它的强大。
```python
>>> name = list('jackdan')
>>> name
['j', 'a', 'c', 'k', 'd', 'a', 'n']
>>> name[4:] = 'ey'
>>> name
['j', 'a', 'c', 'k', 'e', 'y']
>>>
```
- 可以使用原序列不等长的序列将分片替换。
```python
>>> name = list('dan')
>>> name[1:] = list('uring')
>>> name
['d', 'u', 'r', 'i', 'n', 'g']
>>>
```
- **分片赋值语句**可以在**不需要替换**任何原有元素的情况下**插入**新的元素。
```python
>>> numbers = [1, 5]
>>> numbers[1:1] = [2, 3, 4]
>>> numbers
[1, 2, 3, 4, 5]
>>>
```
- 这个程序只是"替换"了一个空的分片，因此实际的操作效果是插入了一个序列。
- 当然, 也可以通过**分片**来删除元素。
```python
>>> numbers
[1, 2, 3, 4, 5]
>>> numbers[1:4] = []
>>> numbers
[1, 5]
>>>
```
- 它如同采用`del`语句的操作。
```python
>>> numbers
[1, 2, 3, 4, 5]
>>> del numbers[1:4]
>>> numbers
[1, 5]
>>>
```

#### 列表方法:
- **方法**是一个与**某些对象**有紧密联系的函数。
- **对象**可能是**列表**、**数字**, 也可能是字符串或者其他类型的**对象**。
- 一般来说, 方法可以如此进行调用:`对象.方法(参数)`。
- 除了对象被放置到方法名之前，并且两者之间使用一个**点号**隔开, 方法调用与函数调用很类似。
- 列表提供的几个方法, 用于检查或者修改列表中的内容。

- `append`:
```python
>>> lst = [1, 2, 3]
>>> lst.append(4)
>>> lst
[1, 2, 3, 4]
>>>
```
- `lst`是一个非常糟糕的变量名, 因为不能使用`list`作为变量名来表示列表。
- 因为`list`是一个内建函数(`tuple`和`str`也是如此)。
- 如果使用**内建函数**(`list`, `tuple`, `str`), 程序中就不能调用这个函数了, 所以不能使用内建函数来作为变量名。
- `lst`是一个毫无意义的变量名, 所以在声明变量的时候使用`prices_of_egg`这样的变量名来贴近变量的意义。
- `append`方法和其他一些方法类似, 只是在**恰当位置**修改**原来的列表**。这就意味着, 它不是简单地返回一个修改过的新列表——而是**直接修改**原来的列表。

- `count`:
- `count`方法统计某个元素在列表中出现的次数:
```python
>>> ['to', 'be', 'or', 'not', 'to', 'be'].count('to')
2
>>> x = [[1, 2], 1, 1, [2, 1,[1, 2]]]
>>> x.count(1)
2
>>> x.count([1, 2])
1
>>>
```

- `extend`:
- `extend`方法可以在列表的**末尾**一次性追加另一个序列中的**多个值**。
- 也就是说, `extend`可以用新列表扩展原有的列表:
```python
>>> a = [1, 2, 3]
>>> b = [4, 5, 6]
>>> a.extend(b)
>>> a
[1, 2, 3, 4, 5, 6]
>>>
```
- 使用起来有点类似于**连接**操作, 两者的主要区别在于:
  - `extend`方法修改了被扩展的序列(以上的实例中, 是`a`);
  - 连接操作会返回一个全新的列表;
```python
>>> a = [1, 2, 3]
>>> b = [4, 5, 6]
>>> a + b
[1, 2, 3, 4, 5, 6]
>>> a
[1, 2, 3]
>>>
```
- **原始的连接操作**创建了一个包含了`a`和`b`副本的新列表。
- 如果需要`a = a+b`的操作, 连接操作的效率会比`extend`方法低。
- 同样, 这里也不是一个**原位置操作**(in-place operation) —— 它并不会修改原来的列表。
```python
>>> a = [1, 2, 3]
>>> b = [4, 5, 6]
>>> a[len(a):] = b
>>> a
[1, 2, 3, 4, 5, 6]
>>>
```
- 可以采用分片来进行操作, 但是代码的**可读性**就不如`extend`方法了。

- `index`:
- `index`方法用于从列表中找出某个值第一个匹配项的索引位置:
```python
>>> knights = ['We', 'are', 'the', 'knights', 'who', 'say', 'ni']
>>> knights.index('who')
4
>>> knights.index('jackdan')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: 'jackdan' is not in list
>>>
```
- 如果匹配项不在列表之中就会抛出一个异常, 如上例所示。

- `insert`:
- `insert`方法用于将对象插入到列表中:
```python
>>> numbers = [1, 2, 3, 5, 6, 7]
>>> numbers.insert(3, 'four')
>>> numbers
[1, 2, 3, 'four', 5, 6, 7]
>>>
```
- 同样, 可以用**分片**操作替代`insert`方法。
```python
>>> numbers = [1, 2, 3, 5, 6, 7]
>>> numbers[3:3] = ['four']
>>> numbers
[1, 2, 3, 'four', 5, 6, 7]
>>>
```
- 只不过, 这样操作的代码**可读性**不如`insert`方法。

- `pop`:
- `pop`会移除列表中的一个元素(默认是最后一个), 并且返回该元素的值:
```python
>>> x = [1, 2, 3]
>>> x.pop()
3
>>> x
[1, 2]
>>> x.pop(0)
1
>>> x
[2]
>>>
```
- `pop`方法是唯一一个既能修改列表用返回元素值(除了`None`)的列表方法。
- 使用`pop`方法可以实现一种常见的数据结构——**栈**。
- **栈**的原理就像被堆放的盘子。只能在顶部放一个盘子, 同样, 也只能从顶部拿走一个盘子。
- 最后被放入堆栈的最先被移除(LIFO(Last In First Out), 即先进后出)。
- 对于上述两个栈操作(放入和移出), 它们有普遍的认可的称谓——**入栈**(`push`)和**出栈**(`pop`)。
```python
>>> x.push(1)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'list' object has no attribute 'push'
>>>
```
- `Python`没有入栈操作, 但可以使用`append`方法来替代。
```python
>>> x = [1, 2, 3]
>>> x.append(x.pop())
>>> x
[1, 2, 3]
>>>
```
- 如果需要实现一个**先进先出**(FIFO(First In First Out))的**队列**, 可以使用`insert(0, ...)`来代替`append`方法。或者也可以继续使用`append`方法, 但是必须用`pop(0)`来代替`pop`。
```python
>>> x = []
>>> x.append(1)
>>> x.append(2)
>>> x.pop(0)
1
>>> x
[2]
>>> x = []
>>> x.insert(0, 1)
>>> x.insert(0, 2)
>>> x.pop()
1
>>> x
[2]
>>>
```
