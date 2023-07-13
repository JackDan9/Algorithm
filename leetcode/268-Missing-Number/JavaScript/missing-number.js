/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let max = nums.length;
  qS(nums, 0, max - 1);
  

  for (let i = 0; i < max; i++) {
    if (nums[i] !== i) {
      return i
    }
  }

  return max;
};

var qS = function(nums, begin, end) {
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

  qS(nums, begin, l - 1);
  qS(nums, l + 1, end);
}