/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  quickSort(nums1, 0, nums1.length - 1);
  quickSort(nums2, 0, nums2.length - 1);

  let i = 0;
  let j = 0;
  let res = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      res.push(nums1[i]);
      i++;
      j++;
    }
  }

  return res;
};

var quickSort =  function (nums, begin, end) {
  if (begin >= end) {
    return;
  }

  if (end < 1) {
    return nums;
  }

  let l = begin;
  let r = end;

  let t = nums[begin];

  while (l < r) {
    while (l < r && nums[r] >= t) {
      r--;
    }

    while (l < r && nums[l] <= t) {
      l++;
    }

    [nums[l], nums[r]] = [nums[r], nums[l]];
  }

  [nums[begin], nums[l]] = [nums[l], nums[begin]];

  quickSort(nums, begin, l - 1);
  quickSort(nums, l + 1, end);
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
