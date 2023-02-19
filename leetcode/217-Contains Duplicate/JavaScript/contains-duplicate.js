/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let map = {};
  let res = false;
  for(let i = 0; i < nums.length; i++) {
    if(!map.hasOwnProperty(nums[i])) {
      map[nums[i]] = 0;
    } else {
      res = true;
      map = {};
      break;
    }
  }
  map = {};
  return res;
};

containsDuplicate([3,3]);