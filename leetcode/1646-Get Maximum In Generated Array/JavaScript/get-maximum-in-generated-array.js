/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let nums = Array.from(n);
  
  nums[0] = 0;
  nums[1] = 1;
  
  let index = 2;

  while (index <= n) {
    if ((index % 2) === 0) {
      nums[index] = nums[index / 2];
    } else {
      console.log(1);
      nums[index] = nums[Math.floor(index / 2)] + nums[Math.floor(index / 2) + 1];
    }
    index++;
  }

  return Math.max(...nums);
};

getMaximumGenerated(3);