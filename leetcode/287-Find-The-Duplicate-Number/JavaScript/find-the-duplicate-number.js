/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let map = new Map();
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      let c = map.get(nums[i]);
      c = c + 1;
      map.set(nums[i], c);
    }
  }

  map.forEach((v, k) => {
    if (v > 1) {
      res = k;
    }
  });

  return res;
};