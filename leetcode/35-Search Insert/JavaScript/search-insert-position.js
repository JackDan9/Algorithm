/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // if (nums.indexOf(target) !== -1) {
  //   return nums.indexOf(target);
  // } else {
    if (target < nums[0]) {
      return 0;
    } else if (target > nums[nums.length - 1]) {
      return nums.length;
    } else {
      let res = 1;

      for (let i = 0; i < nums.length; i++) {
        j = i + 1;
        if (target === nums[i]) {
          res = i;
          break;
        }
        
        if (target > nums[i] && target < nums[j]) {
          res = j;
          break;
        }
      }
      return res;
    }
  // }
};

console.log(searchInsert([1, 3, 5], 4));