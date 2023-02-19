/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  if (nums.length === 1) return nums;
  let res = [];
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      let t = map.get(nums[i]);
      map.set(nums[i], ++t);
    }
  }
  map.forEach((v, k) => {
    if (v > (nums.length / 3)) {
      res.push(k);
    }
  });

  return res;
};

console.log(majorityElement([3,2,3]));