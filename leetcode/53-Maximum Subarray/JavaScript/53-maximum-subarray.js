// Input: [-2,1,-3,4,-1,2,1,-5,4]
// Output: [4,-1,2,1] has the largest sum = 6
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    let sum = nums[0];

    for(let i = 0, len = nums.length; i < len; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        res = Math.max(sum, res);
    }

    return res;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));