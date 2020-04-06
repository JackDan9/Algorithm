# Merge Sort --- 归并排序
## 定义
- 归并排序的递归实现实现是算法设计中分治策略的典型应用，它的基本思想是: 递归将两个已排序的序列合并成一个序列。

## 基本思想详解
- 归并排序采用的是分治的思想，首先是“分”，将一个数组反复二分为两个小数组，直到每个数组只有一个元素；其次是“治”，从最小数组开始，两两按大小顺序合并，直到并为原始数组大小。

## 实现

``` javascript
function mergeArray(arr, begin, middle, end, temp) {
    let i = begin;
    let m = middle;
    let j = middle + 1;
    let n = end;
    let index = 0;
    while(i <= m && j <= n) {
        if(arr[i] < arr[j]) {
            temp[index++] = arr[i++];
        } else {
            temp[index++] = arr[j++];
        }
    }
    while(i <= m) {
        temp[index++] = arr[i++];
    }
    while(j <= n) {
        temp[index++] = arr[j++];
    }
    for(let l=0; l < index; l++) {
        arr[begin+l] = temp[l];
    }
    return arr;
}
// 递归实现归并排序
function mergeSort(arr, begin, end, temp) {
    if(arr.length < 2) {
        return arr;
    }
    if(begin < end) {
        let middle = Math.floor((begin+end) / 2);
        mergeSort(arr, begin, middle, temp); // 左子数组有序
        mergeSort(arr, middle+1, end, temp); // 右子数组有序
        arr = mergeArray(arr, begin, middle, end, temp);
    }
    return arr;
}

// Example
let arr = [10, 3, 1, 5, 11, 2, 0, 6, 3];
let temp = new Array();
let SortedArr = mergeSort(arr, 0, arr.length - 1, temp);
console.log(SortedArr);
```

-------

## Example --- 归并排序

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta chartset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="排序算法之归并排序" />
        <title>排序算法之归并排序</title>
        <script type="text/javascript">
            function mergeArray(arr, begin, middle, end, temp) {
                let i = begin;
                let m = middle;
                let j = middle + 1;
                let n = end;
                let index = 0;
                while(i <= m && j <= n) {
                    if(arr[i] < arr[j]) {
                        temp[index++] = arr[i++];
                    } else {
                        temp[index++] = arr[j++];
                    }
                }
                while(i <= m) {
                    temp[index++] = arr[i++];
                }
                while(j <= n) {
                    temp[index++] = arr[j++];
                }
                for(let l=0; l < index; l++) {
                    arr[begin+l] = temp[l];
                }
                return arr;
            }
            // 递归实现归并排序
            function mergeSort(arr, begin, end, temp) {
                if(begin < end) {
                    let middle = Math.floor((begin+end) / 2);
                    mergeSort(arr, begin, middle, temp); // 左子数组有序
                    mergeSort(arr, middle+1, end, temp); // 右子数组有序
                    arr = mergeArray(arr, begin, middle, end, temp);
                }
                return arr;
            }

            // Example
            let arr = [10, 3, 1, 5, 11, 2, 0, 6, 3];
            let temp = new Array();
            let SortedArr = mergeSort(arr, 0, arr.length - 1, temp);
            console.log(SortedArr);
        </script>
    </head>
    <body>

    </body>
</html>
```

------

## 时间复杂度
### 平均情况: O(nlogn)
### 最好情况: O(nlogn)
### 最坏情况: O(nlogn)

------

## 空间复杂度
### O(n)

------

## 稳定性
### 稳定

------