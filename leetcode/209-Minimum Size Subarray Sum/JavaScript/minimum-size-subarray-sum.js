/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // 暴力超时
  // let len = nums.length;
  // let res = len + 1;

  // for (let i = 0; i < len; i++) {
  //   let t = [nums[i]];
  //   if (nums[i] >= target) {
  //     res = 1;
  //     break;
  //   }
  //   for (let j = i + 1; j < len; j++) {
  //     t.push(nums[j]);
  //     sum = t.reduce((acc, cur) => acc + cur, 0);
  //     if (sum >= target) {
  //       res = Math.min(res, t.length);
  //     }
  //   }
  // }

  // return res === len + 1 ? 0 : res;

  let l = 0;
  let r = 0;
  let sum = 0;

  let res;

  for (; r < nums.length; r++) {
    if (nums[r] >= target) {
      return res;
    }

    sum += nums[r];

    while (sum >= target) {
      res = res < (r - l + 1) ? res : (r - l + 1);
      sum -= nums[l];
      l++;
    }
  }

  return res ? res : 0;
};

console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
