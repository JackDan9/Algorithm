/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums[0];
};

var quickSort = function(arr, begin, end) {
  if (begin >= end) {
    return;
  }

  if (arr.length < 2) {
    return arr;
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

  quickSort(arr, begin, left - 1);
  quickSort(arr, left + 1, end);
}

console.log(findMin([3, 4, 5, 1, 2]))