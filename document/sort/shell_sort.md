# Shell Sort --- 希尔排序(缩小增量排序)

## 定义
- 将待排序列表下标的一定增量分组(比如增量为2时, 下标1, 3, 5, 7为一组, 下标2, 4, 6, 8为另一组), 各组内进行直接插入排序; 随着增量的越来越小, 每组所包含的数字序列越来越多, 当增量减至1时, 整个序列被分成一个组, 排序就完成了。

## 实现
``` javascript
function ShellSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    // gap即为增量
    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for(let i = gap; i < arr.length; i++) {
            let j = i;
            let current = arr[i];
            while(j - gap >= 0 && current < arr[j - gap]) {
                arr[j] = arr[j -gap];
                j = j - gap;
            }
            arr[j] = current;
        }
    }
}

var arr = [3,5,7,1,4,56,12,78,25,0,9,8,42,37];
ShellSort(arr);
```

## Example --- 希尔排序

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta chartset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="排序算法之希尔排序" />
        <title>排序算法之希尔排序</title>
        <script type="text/javascript">
            let ShellSort = (arr, begin, end) => {
                if(arr.length < 2) {
                    return arr;
                }
                // gap即为增量
                for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
                    for(let i = gap; i < arr.length; i++) {
                        let j = i;
                        let current = arr[i];
                        while(j - gap >= 0 && current < arr[j - gap]) {
                            arr[j] = arr[j -gap];
                            j = j - gap;
                        }
                        arr[j] = current;
                    }
                }
            }
            var arr = [3,5,7,1,4,56,12,78,25,0,9,8,42,37];
            ShellSort(arr);
            console.log(arr);
        </script>
    </head>
    <body>

    </body>
</html>
```

------

## 时间复杂度
### 平均情况: O(nlogn~n^2)
### 最好情况: O(n^1.3)
### 最坏情况: O(n^2)

------

## 空间复杂度
### O(1)

------

## 稳定性
### 不稳定


------