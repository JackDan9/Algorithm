var maxSubArray = function (nums) {
  let map = new Map();
  let max = nums[0];
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      let subArray = nums.slice(i, j);

      let subArraySum = subArray.reduce((acc, cur) => acc + cur, 0);
      if (!map.has(subArray)) {
        map.set(subArray, subArraySum);
      }
      max = Math.max(max, sum);
    }
  }
  console.log("map: ", map);
  map.forEach((v, k) => {
    if (v === max) {
      res = k;
    }
  })

  return res;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));