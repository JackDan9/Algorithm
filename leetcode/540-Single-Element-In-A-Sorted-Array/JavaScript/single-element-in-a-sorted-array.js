/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  // 时间复杂度，空间复杂度都巨高
  // let map = new Map();
  // let res;
  // for (let i = 0; i < nums.length; i++) {
  //   if (!map.has(nums[i])) {
  //     map.set(nums[i], 1);
  //   } else {
  //     let count = map.get(nums[i]);
  //     count = count + 1;
  //     map.set(nums[i], count);
  //   }
  // }
  // map.forEach((v, k) => {
  //   if (v === 1) {
  //     res = k;
  //     return;
  //   }
  // });

  // return res;

  // 双指针
  let l = 0;
  let r = l + 2;
  if (nums.length < 1) {
    return nums[0];
  }
  let res;

  while (l < r && r < nums.length) {
    let mid = Math.floor((l + r) / 2);

    if (nums[l] !== nums[mid] && nums[mid] !== nums[r]) {
      res = nums[mid];
      break;
    } else if (nums[l] !== nums[mid] && l === 0) {
      res = nums[l];
      break;
    } else if (nums[mid] !== nums[r] && r === (nums.length - 1)) {
      res = nums[r];
      break;
    } else {
      l++;
      r = l + 2;
    }
  }

  return res;
};

console.log(singleNonDuplicate([1, 1, 2]));