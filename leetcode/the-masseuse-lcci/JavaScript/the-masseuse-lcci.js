/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
  let index1 = 0;
  let index2 = 0;
  let index = 0;

  while (index < nums.length) {
    let temp = Math.max(index1, index2 + nums[index]);

    index2 = index1;
    index1 = temp;

    index++;
  }

  return index1;
};

console.log(massage([2,7,9,3,1]));