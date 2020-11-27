/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let len = nums.length;
  let index = 1;
  while (index < len) {
    if (nums[index] !== nums[index - 1]) {
      if (nums[index] === nums[index + 1]) {
        return nums[index - 1];
      }
      return nums[index];
    }
    index = index + 2;
  }
  return nums[len - 1];
};