/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
  if (nums.length < 1) return false;
  let res = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((Math.abs(nums[i] - nums[j]) <= valueDiff) && (Math.abs(i - j) <= indexDiff)) {
        res = true;
        break;
      }
    }
  }

  return res;
};


console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0));
console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2));
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9],2,3));