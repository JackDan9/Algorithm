# Bubble_Sort
## 定义
- 冒泡排序: 冒泡排序可以算是最简单的、最基础的排序算法了。

## 基本原理

- 它的基本原理是: 重复的遍历(走过)待排序的一组数字(通常是列表形式)，依次比较两个相邻的元素(数字), 若它们的顺序错误则将它们调换一下, 直至没有元素再需要交换为止。因为没遍历一次列表，最大(或者最小)的元素经过交换一点点"浮"到列表的一端(顶端), 所以形象的称这个算法为冒泡算法。

------

## 实现

``` javascript
function BubbleSort(args) {
    let i, j, temp;
    for (i=0; i < args.length - 1; i++) {
        for (j=i+1; j < args.length; j++) {
            if (args[i] > args[j]) {
                temp = args[i];
                args[i] = args[j];
                args[j] = temp;
            }
        }
    }
    return args;
}

var arr=[10, 7, 9, 11, 22, 33, 4, 2, 0, 1000];
BubbleSort(arr);
console.log(arr);
```

## Example

``` html

```

- 由于这样的排序仅仅是实现了交换顺序, 不算是真正的冒泡排序, 效率也比较低。
- 当`i=0`时,
- arr[0]和它后面的每一项进行比较大小, 前者大于后者，则进行转换。始终保证arr[0]为最小值。
- 当`i=1`时,(arr[0]已经为最小值, 不需要进行比较)
- `arr[1]`和它后边的每一项进行比较大小, 前者大于后者, 则进行交换。始终保证arr[1]为最小值(出去arr[0]以外)。
......
- 直至`i=arr.length-2`时，保证前`arr.length-1`项均“比较”小（小于后边的所有项），此时不再需要进行比较。(当n个数，前n-1个为“比较”小的值后，最后一个还有什么比较的意义呢？？)

------

## 优化后的冒泡排序

``` javascript
function BubbleSort(args) {
    let i, j, temp;
    for(i=0; i < args.length - 1; i++) {
        for(j=args.length - 1; j > i; j--) {
            if(arr[j] < arr[j-1]) {
                temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return args;
}

var arr=[10, 7, 9, 11, 22, 33, 4, 2, 0, 1000];
BubbleSort(arr);
console.log(arr);
```

- 当i=0时,
- j的第一次循环: j = arr.length - 1, j 从数组的最后一项开始和前一项比较大小, 当前者小于后者, 交换位置。
- j的第二次循环: j = arr.length - 2, 继续和前一项比较大小。
......
- 直至j=1时结束。此时数组的第一项为最小值。

- 当i = 2时,
- j的第1次循环: j = arr.length - 1, j从数组的最后一项开始和前一项比较大小, 当前者小于后者, 交换位置。
- j的第2次循环: j = arr.length - 2, 继续和前一项比较大小。
......
- 直至j = 2时结束(即比较完第三项和第二项, 第一项已经确定, 不需要进行比较)。此时数组的第二项为最小值(除去第一项以外)。

......

- 继续循环i, i = arr.length - 2时。比较j的第arr.length - 1项和第j = arr.length - 2项, 即可得到最终结果。

## Example
``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <title>优化之后的冒泡排序----真正的冒泡排序</title>
        <script type="text/javascript">
            function BubbleSort(arr) {
                let i, j, temp;
                for(i=0; i < arr.length - 1; i++) {
                    for(j=arr.length - 1; j > i; j--) {
                        if(arr[j] < arr[j - 1]) {
                            temp = arr[j];
                            arr[j] = arr[j - 1];
                            arr[j - 1] = temp;
                        }
                    }
                }
                return arr;
            }
            var arr=[10, 7, 9, 11, 22, 33, 4, 2, 0, 1000];
            BubbleSort(arr);
            console.log(arr);
        </script>
    </head>
    <body>

    </body>
</html>
```

------


## 深度优化后的冒泡排序
- 当待排序的序列为[2, 1, 3, 4, 5, 6, 7, 8, 9], 那么仅仅需要交换第一个和第二个关键字即可。但是前面的算法还是会将循环都执行一遍，造成了多余的计算。
- 此时我们可以添加一个标记标量flag。

``` javascript
function BubbleSort(arr) {
    let i, j, temp;
    let flag = true;
    for (i=0; i < arr.length - 1 && flag; i++) {
        flag = false;
        for(j=arr.length - 1; j > i; j--) {
            if(arr[j] < arr[j-1]) {
                temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
                flag = true;
            }
        }
    }
    return arr;
}
var arr=[10, 7, 9, 11, 22, 33, 4, 2, 0, 1000];
BubbleSort(arr);
console.log(arr);
```

## Example
``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <title>深度优化之后的冒泡排序----冒泡排序</title>
        <script type="text/javascript">
            function BubbleSort(arr) {
                let i, j, temp;
                let flag = true
                for(i=0; i < arr.length - 1 && flag; i++) {
                    flag = false;
                    for(j=arr.length - 1; j > i; j--) {
                        if(arr[j] < arr[j - 1]) {
                            temp = arr[j];
                            arr[j] = arr[j - 1];
                            arr[j - 1] = temp;
                            flag = true
                        }
                    }
                }
                return arr;
            }
            var arr=[10, 7, 9, 11, 22, 33, 4, 2, 0, 1000];
            BubbleSort(arr);
            console.log(arr);
        </script>
    </head>
    <body>

    </body>
</html>
```

- 标记变量声明时状态为true，进行循环后，标记变量初始化为false状态。当后边的项两两进行比较时，发生交换则将标记变量状态更正为true，如果自始至终标记变量的状态都没有更正为true，说明为有序，则在外层循环的终止判断语句中退出。

- 优化的关键在于：
- 在变量i的for循环中，增加了对flag是否为true的判断。通过这种改进，可以**避免在有序的情况下进行无意义的循环判断**。


## 时间复杂度

- 1、**最好的情况，即数组有序，可以推断出就是n-1次的比较，时间复杂度为O(n)** 
- 2、**当最坏的情况，即数组逆序，第一个数需要排n-1次，第二个数需要排n-2次，第3个数需要排n-3次……这样依次类推，最后一个数只需要排一次，加起来共需要排n(n-1)/2次，所以时间复杂度为O（O^2）**

------

> Thinking in JackDan