/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    debugger;
    let len = nums.length;
    let i = 0;
    let result = [];
    if ([...new Set(nums)].length === 1 && [...new Set(nums)][0] === 0) {
        return nums;
    }
    while (i < len) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
        if (nums[i - 1] === 0 && i !== len - 1) {
            i = i - 1;
        } else {
            i++;
        }
    }
    return nums;
};