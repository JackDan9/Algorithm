// 可以使用双指针的方法来实现求得数字数组中和最大的最短子数组。具体步骤如下：

// 1. 初始化两个指针 left 和 right，分别指向数组的第一个元素。

// 2. 初始化两个变量 sum 和 maxSum，分别表示当前子数组的和以及最大子数组的和，初始值都为数组的第一个元素。

// 3. 初始化两个变量 start 和 end，分别表示最大子数组的起始位置和结束位置，初始值都为 0。

// 4. 使用 while 循环遍历数组，当 right 指针小于数组长度时：

// a.计算当前子数组的和 sum。

// b.如果 sum 大于 maxSum，则更新 maxSum，并将 start 和 end 更新为当前子数组的起始位置和结束位置。

// c.如果 sum 小于等于 0，则将 left 指针右移，并将 sum 重置为当前元素的值。

// d.将 right 指针右移，并将 sum 加上当前元素的值。

// 5. 返回最大子数组，即从数组中 start 到 end 的子数组。

// 以下是 JavaScript 代码实现：


function findShortestSubarray(arr) {
  let left = 0;
  let right = 0;
  let sum = arr[0];
  let maxSum = arr[0];
  let start = 0;
  let end = 0;

  while (right < arr.length) {
    if (sum > maxSum) {
      maxSum = sum;
      end = right;
      start = left;
    }

    if (sum <= 0) {
      left = right;
      sum = arr[right];
    } else {
      sum += arr[right];
    }

    right++;
  }

  return arr.slice(start, end + 1);
}


console.log(findShortestSubarray([-1, -2, -3, -2, 0]));

// 调用该函数并传入数字数组，即可返回和最大的最短子数组。