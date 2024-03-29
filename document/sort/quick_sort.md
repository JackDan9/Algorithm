# Quick_Sort

## 定义
- Quick_Sort——快速排序, 顾名思义，就是算法比较快。
- 当然，这个快是根据其**时间复杂度平均情况O(nlogn)**而言的, 毕竟我们的世界时平均情况最普遍嘛，如果非要有人出来抬杠以最坏的情况来比较，那这里不做评说了。

## 基本思想
- 通过一趟排序将待排序列表分割成独立的两部分, 其中一部分的元素都比另一部分的元素小, 然后再按照此方法将**独立的两部分**分别继续重复进行此操作, 这个过程我们可以通过递归实现, 从而达到最终将整个列表排序的目的。

## 实例

``` javascript
// 每次选择最左边的数作为基数
function QuickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    // 定义左指针
    let left = 0;
    // 定义右指针
    let right = arr.length - 1;
    // 开启每一轮的排序
    while(left < right) {
        // 寻找右边比arr[0]小的数的下标
        while(arr[right] >= arr[0] && left < right) {
            right = right - 1;
        }

        // 寻找左边比arr[0]大的数的下标
        while(arr[left] <= arr[0] && left < right) {
            left++;
        }
        // 当左边指针与右边指针相遇后, 交换arr[0]与当前两个指针所在的元素
        if (right == left) {
            let middle = arr[right];
            arr[right] = arr[0];
            arr[0] = middle;
            break;
        }
        // 当左指针小于右指针的位置, 交换两个指针当前位置的元素
        let temp = arr[right];
        arr[right] = arr[left];
        arr[left] = temp;
    }
    // 递归实现
    return QuickSort(arr.slice(0,left)).concat(arr.slice(left,right+1)).concat(QuickSort(arr.slice(right+1)));
}

var arr=[10, 7, 9, 11, 22, 33, 4, 2, 0, 1000];
console.log(QuickSort(arr));
```

------

## Example(QuickSort)

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta chartset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="JS排序算法之快速排序" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>JS排序算法之快速排序</title>
        <script type="text/javascript">
            function QuickSort(arr) {
                if(arr.length < 2) {
                    return arr;
                }

                let left = 0;
                let right = arr.length - 1;

                while(left < right) {
                    if(arr[right] >= arr[0] && left < right) {
                        right--;
                    }

                    if(arr[left] <= arr[0]  && left < right) {
                        left++;
                    }

                    if (right == left) {
                        let middle = arr[right];
                        arr[right] = arr[0];
                        arr[0] = middle;
                        break;
                    }

                    let temp = arr[right];
                    arr[right] = arr[left];
                    arr[left] = temp;
                }
                return QuickSort(arr.slice(0, left)).concat(arr.slice(left,right+1)).concat(QuickSort(arr.slice(right+1)));
            }

            var arr=[10, 7, 9, 11, 22, 33, 4, 2, 0, 1000];
            console.log(QuickSort(arr));
        </script>
    </head>
    <body>

    </body>
</html>
```

------

## 简化优化

``` javascript
let QuickSort = (array) => {
    if (array.length  < 2) {
        return array;
    }

    let leftArray = [];
    let rightArray = [];
    let baseDigit = array[0];
    array.forEach(element => {
        if (element < baseDigit) {
            leftArray.push(element);
        } else if (element > baseDigit) {
            rightArray.push(element);
        }
    });

    return QuickSort(leftArray).concat(baseDigit, QuickSort(rightArray));
}

var arr=[10, 7, 9, 4, 11, 22, 33, 4, 2, 0, 1000];
console.log(QuickSort(arr));
```

- 以上的代码存在一个情况，就是提供数组里面的元素中有两个元素相等的这种情况，输出是一个元素。所以也就是说，上面的简化优化的function是无法对数组元素存在相同的情况进行处理。


## Example(QuickSort(简单优化))

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta chartset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="JS排序算法之快速排序" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>JS排序算法之快速排序</title>
        <script type="text/javascript">
            let QuickSort = (array) => {
                if (array.length  < 2) {
                    return array;
                }

                let leftArray = [];
                let rightArray = [];
                let baseDigit = array[0];
                array.forEach(element => {
                    if (element < baseDigit) {
                        leftArray.push(element);
                    } else if (element > baseDigit) {
                        rightArray.push(element);
                    }
                });

                return QuickSort(leftArray).concat(baseDigit, QuickSort(rightArray));
            }

            var arr=[10, 7, 9, 4, 11, 22, 33, 4, 2, 0, 1000];
            console.log(QuickSort(arr));
        </script>
    </head>
    <body>

    </body>
</html>
```

------


## 优化改造针对于数组存在相同元素

``` javascript
let BetterQuickSort = (arr, begin, end) => {
    // 递归出口
    if(begin >= end) {
        return;
    }
    let left = begin; // 左指针
    let right = end; // 右指针
    let temp = arr[begin]; // 基准数, 这里取数组第一个数
    while(left < right) {
        // 右指针从右向左扫描，碰到第一个小于基准数的时候停住
        while(left < right && arr[right] >= temp) {
            right--;
        }
        // 左指针从左向右扫描, 碰到第一个大于基准数的时候停住
        while(left < right && arr[left] <= temp) {
            left++;
        }
        // 交换左右指针所停位置的数
        [arr[left], arr[right]] = [arr[right], arr[left]];
    }
    // 最后交换基准数与指针相遇位置的数
    [arr[begin], arr[left]] = [arr[left], arr[begin]];
    // 递归处理左右数组
    BetterQuickSort(arr, begin, left - 1);
    BetterQuickSort(arr, left + 1, end);
}

var arr=[10, 7, 9, 4, 11, 22, 33, 4, 2, 0, 1000];
BetterQuickSort(arr, 0, 9);
console.log(arr);
```

- 这个解决了数组当中存在两个元素相等的情况，也就是`arr[right] >= temp`以及`arr[left] <= temp`当中的等于情况.

## Example(BetterQuickSort)

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta chartset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="JS排序算法之快速排序" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>JS排序算法之快速排序</title>
        <script type="text/javascript">
            let BetterQuickSort = (array, begin, end) => {
                if(array.length < 2) {
                    return array;
                }
                
                let left = begin;
                let right = end;
                let temp = arr[begin];
                while(left < right) {
                    while(left < right && arr[right] >= temp) {
                        right--;
                    }
                    while(left < right && arr[left] <= temp) {
                        left++;
                    }
                    [arr[left], arr[right]] = [arr[right], arr[left]];
                }
                [arr[begin], arr[left]] = [arr[left], arr[begin]];
                BetterQuickSort(arr, begin, left - 1);
                BetterQuickSort(arr, left + 1, end);
            }
            var arr=[10, 7, 9, 4, 11, 22, 33, 4, 2, 0, 1000];
            BetterQuickSort(arr, 0, 9);
            console.log(arr);
        </script>
    </head>
    <body>

    </body>
</html>
```

------

## 还有一种解法

```javascript
const QuickSort = (array) => {
    const sort = (array, left = 0, right = array.length - 1) => {
        if (left >= right) {
            return;
        }
        let i = left;
        let j = right;
        const baseVal = array[j]; // 取无序数组最后一个数为基准值
        while(i < j) {
            while(i < j && array[i] <= baseVal) {
                i++;
            }
            array[j] = array[i];
            while(j > i && array[j] >= baseVal) {
                j--;
            }
            array[i] = array[j];
        }
        
        array[j] = baseVal;
        sort(array, left, j-1);
        sort(array, j+1, right);
    }
    const newArr = array.concat();
    sort(newArr);
    return newArr;
}

var arr=[10, 7, 9, 4, 11, 22, 33, 4, 2, 0, 1000];
console.log(QuickSort(arr));
```

