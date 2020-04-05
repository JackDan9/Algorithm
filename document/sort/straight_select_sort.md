# Straight Select Sort --- 直接选择排序
## 定义
- 选择排序也非常的简单直观，它的基本思想: 先在待排序列表中找到最小(大)元素, 把它放在起始位置作为已排序序列; 然后, 再从剩余待排序序列中找到最小(大)的元素放在已排序序列的末尾，以此类推, 直至完毕。

## 实现

``` javascript
function StraightSelectSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    let index;
    for(let i = 0; i < arr.length - 1; i++) {
        index = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[index] > arr[j]) {
                index = j;
            }
        }
        if(index != i) {
            let temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }
    return arr;
}

var arr=[10, 7, 9, 4, 11, 22, 33, 4, 2, 0, 1000];
StraightSelectSort(arr);
console.log(arr);
```

------

## 算法描述

- 1）假设未排序序列的第一个是最大(小)值，记下该元素的位置，从前往后比较
- 2）若某个元素比该元素大(小)，覆盖之前的位置
- 3）重复第二个步骤，直到找到未排序的末尾
- 4）将未排序元素的第一个元素和最大(小)元素交换位置
- 5）重复前面几个步骤，直到所有元素都已经排序。

------

## Example---Straight Select Sort

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <title>排序之直接选择排序</title>
        <script type="text/javascript">
            let StraightSelectSort = (arr, begin, end) => {
                 if(arr.length < 2) {
                    return arr;
                }
                let index;
                for(let i = begin; i < end; i++) {
                    index = i;
                    for (let j = i + 1; j < end + 1; j++) {
                        if(arr[index] > arr[j]) {
                            index = j;
                        }
                    }
                    if(index != i) {
                        let temp = arr[i];
                        arr[i] = arr[index];
                        arr[index] = temp;
                    }
                }
                return arr;
            }

            var arr=[10, 7, 9, 4, 11, 22, 33, 4, 2, 0, 1000];
            StraightSelectSort(arr, 0, 9);
            console.log(arr);
        </script>
    </head>
    <body>

    </body>
</html>
```

------


## 另一种实现

``` javascript
function StraightSelectSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    let temp;
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

var arr=[10, 7, 9, 4, 11, 22, 33, 4, 2, 0, 1000];
StraightSelectSort(arr);
console.log(arr);
```

------

## Example---另外一种实现

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <title>选择排序之另外一种实现</title>
        <script type="text/javascript">
            function StraightSelectSort(arr) {
                if(arr.length < 2) {
                    return arr;
                }
                let temp;
                for(let i = 0; i < arr.length - 1; i++) {
                    for(let j = i + 1; j < arr.length; j++) {
                        if (arr[j] < arr[i]) {
                            temp = arr[j];
                            arr[j] = arr[i];
                            arr[i] = temp;
                        }
                    }
                }
                return arr;
            }

            var arr=[10, 7, 9, 4, 11, 22, 33, 4, 2, 0, 1000];
            StraightSelectSort(arr);
            console.log(arr);
        </script>
    </head>
    <body>

    </body>
</html>
```

------

## 时间复杂度
### 平均情况: O(n^2)
### 最坏情况: O(n^2)
### 最好情况: O(n^2)

- 最好、平均、最坏的效果是一样的，由此可得这是最没有效率的排序了。

------

## 空间复杂度
### O(1)

------

## 稳定性
### 不稳定

------



