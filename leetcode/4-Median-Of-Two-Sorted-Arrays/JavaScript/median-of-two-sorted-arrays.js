/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let t = nums1.concat(nums2);  
  quickSort(t, 0, t.length - 1);
  return (t.length % 2) === 1 ? t[(t.length - 1) / 2] : (t[t.length / 2] + t[(t.length / 2) - 1]) / 2
};

var quickSort = function (arr, begin, end) {
  if(begin >= end) {
    return;
  }

  if(arr.length < 2) {
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

console.log(findMedianSortedArrays([1, 3], [2, 4]));