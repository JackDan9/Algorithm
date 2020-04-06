# Heap Sort --- 堆排序

## 定义
- 堆排序比之前几种排序都要稍微难以理解一些, 理解此算法, 需要具备一些关于堆这种数据结构的知识储备。堆的结构相当于一颗完全二叉树, 最大堆满足下面的性质: 父结点的值总大于它的孩子结点的值。

## 基本思想
- 将待排序序列构造成一个大顶堆，此时，整个序列的最大值就是堆顶的根节点。将其与末尾元素进行交换，此时末尾就为最大值。然后将剩余n-1个元素重新构造成一个堆，这样会得到n个元素的次小值。如此反复执行，便能得到一个有序序列了。

## 实现

``` javascript
// 生成大顶堆
function AdjustHeap(arr, i, len) {
    // 保存当前值
    let temp = arr[i];
    // 从i结点的左子结点开始, 也就是2*i+1处开始
    for(let j = 2*i + 1; j < len; j= 2*j + 1) {
        // 如果左子结点小于右子结点, j指向右子结点
        if((j + 1 < len) && arr[j] < arr[j+1]) {
            j++;
        } 
        // 如果子节点大于父节点, 将子节点值赋给父节点(不用进行交换)值和索引都赋值
        if(arr[j] > temp) {
            arr[i] = arr[j];
            i = j;
        } else {
            break;
        }
    }
    arr[i] = temp;
}

function HeadSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    // 构造大顶堆
    // 此时从我们最后一个非叶子结点开始, 叶子结点自然不用调整
    // 从第一个非叶子结点从下至上, 从右至左调整结构
    for(let i = arr.length/2-1; i >= 0; i--) {
        AdjustHeap(arr, i, arr.length);
    }
    // 交换堆顶元素与末尾元素; 不算最后一个元素, 重新调整堆
    for(let k = arr.length - 1; k > 0; k--) {
        [arr[0], arr[k]] = [arr[k], arr[0]];
        //不算最后一个元素, 重新堆堆进行调整
        AdjustHeap(arr, 0, k);
    }
    return arr;
}

let arr = [5, 8, 10, 3, 2, 18, 17, 9];
console.log(HeadSort(arr));
```

------

## Example --- 堆排序

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta chartset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="排序算法之堆排序" />
        <title>排序算法之堆排序</title>
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
            StraightInsertSort(arr, 0 ,9);
            console.log(arr);
        </script>
    </head>
    <body>

    </body>
</html>
```

------

