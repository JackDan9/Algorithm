/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  quickSort(arr, 0, arr.length - 1);
  return arr.slice(0, k);
  // console.log(arr);
};

var quickSort = function (arr, begin, end) {
  if(begin >= end) {
    return;
  }
  let left = begin;
  let right = end;
  let t = arr[begin];

  while(left < right) {
    while(left < right && t <= arr[right]) {
      right--;
    }
    while(left < right && t >= arr[left]) {
      left++;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
  }

  [arr[begin], arr[left]] = [arr[left], arr[begin]];

  quickSort(arr, begin, left - 1);
  quickSort(arr, left + 1, end);
}

console.log(getLeastNumbers([3, 2, 1, 0], 2));