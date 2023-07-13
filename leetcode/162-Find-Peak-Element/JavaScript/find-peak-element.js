/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length < 2) {
    return 0;
  }

  if (nums.length === 2 && nums[1] > nums[0]) {
    return 1;
  }

  let res = 0;
  

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1] && nums[i] > nums[i - 1]) {
      res = i;
      break;
    }
  }

  return res;
};

console.log(findPeakElement([1, 2]));