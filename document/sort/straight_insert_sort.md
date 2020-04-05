# Straight Insert Sort --- 直接插入排序

## 定义
- 顾名思义, 直接插入排序就是将未排序元素一个个的插入到已排序列表中，它的基本思想: 对于**未排序元素**, 在已排序序列中从后向前扫描, 找到相应位置把它插入进去; 在从后面向前扫描过程中, 需要反复把已排序元素逐步向后挪位, 为新元素提供插入空间。

## 实现

``` javascript
function StraightInsertSort(arr) {
    // 如果只有一个元素，直接返回
    if (arr.length  < 2) {
        return arr;
    }
    // 从第二个元素开始比较
    for(let i = 1; i < arr.length; i++) {
        // 要比较的元素
        let temp = arr[i];
        let j = i - 1;
        // 后边的元素小于已经排好序的数组的元素, 并且一直比较到数组的第一个元素;
        // 如果满足条件, 就交换, 否则就将这个元素参入进去了
        while(j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}

var arr=[10, 7, 9, 4, 11, 22, 33, 4, 2, 0, 1000];
StraightInsertSort(arr);
console.log(arr);
```

## Example --- 直接插入排序

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta chartset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="排序算法之直接插入排序" />
        <title>排序算法之直接插入排序</title>
        <script type="text/javascript">
            let StraightInsertSort = (arr, begin, end)  => {
                if(arr.length < 2) {
                    return arr;
                }
                for(let i = begin + 1; i < end + 1; i++) {
                    let temp = arr[i];
                    let j = i - 1;
                    while(j >= 0 && arr[j] > temp) {
                        arr[j + 1] = arr[j];
                        j--;
                    }
                    arr[j +1 ] = temp;
                }
                return arr;
            }
            var arr=[10, 7, 9, 4, 11, 22, 33, 4, 2, 0, 1000];
            StraightInsertSort(arr);
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
### 最好情况: O(n)
### 最坏情况: O(n^2)

------

## 空间复杂度
### O(1)

------

## 稳定性
### 稳定


------