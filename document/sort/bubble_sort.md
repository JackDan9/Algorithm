# Bubble_Sort
## 定义
- 冒泡排序: 冒泡排序可以算是最简单的、最基础的排序算法了。

## 基本原理

- 它的基本原理是: 重复的遍历(走过)待排序的一组数字(通常是列表形式)，依次比较两个相邻的元素(数字), 若它们的顺序错误则将它们调换一下, 直至没有元素再需要交换为止。因为没遍历一次列表，最大(或者最小)的元素经过交换一点点"浮"到列表的一端(顶端), 所以形象的称这个算法为冒泡算法。

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

