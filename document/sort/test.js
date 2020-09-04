/**
 * Quick Sort
 * Author: JackDan
 */
function quickSort(arr, begin, end) {
  let arrLen = arr.length;

  if (begin >= end) {
    return;
  }

  let left = begin;
  let right = end;

  let temp = arr[begin];

  while (left < right) {
    while(left < right && arr[right] >= temp) {
      right--;
    }

    while(left < right && arr[left] <= temp) {
      left++;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
  }

  [arr[begin], arr[left]] = [arr[left], arr[begin]];

  quickSort(arr, begin, left - 1);
  quickSort(arr, left + 1, end);
}

var arr=[10, 7, 9, 4, 11, 22, 33, 4, 2, 0, 1000];
quickSort(arr, 0, 10);
console.log(arr);

// let BetterQuickSort = (arr, begin, end) => {
//   // 递归出口
//   if(begin >= end) {
//       return;
//   }
//   let left = begin; // 左指针
//   let right = end; // 右指针
//   let temp = arr[begin]; // 基准数, 这里取数组第一个数
//   while(left < right) {
//       // 右指针从右向左扫描，碰到第一个小于基准数的时候停住
//       while(left < right && arr[right] >= temp) {
//           right--;
//       }
//       // 左指针从左向右扫描, 碰到第一个大于基准数的时候停住
//       while(left < right && arr[left] <= temp) {
//           left++;
//       }
//       // 交换左右指针所停位置的数
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//   }
//   // 最后交换基准数与指针相遇位置的数
//   [arr[begin], arr[left]] = [arr[left], arr[begin]];
//   // 递归处理左右数组
//   BetterQuickSort(arr, begin, left - 1);
//   BetterQuickSort(arr, left + 1, end);
// }

// var arr=[10, 7, 9, 4, 11, 22, 33, 4, 2, 0, 1000];
// BetterQuickSort(arr, 0, 9);
// console.log(arr);