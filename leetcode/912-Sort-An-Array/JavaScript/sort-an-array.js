/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let len = nums.length;

    for(let i = 0; i < len; i++) {
        for(let j = i + 1; j < len; j++) {
            if(nums[i] > nums[j]) {
                let tmp;
                tmp = nums[i];
                nums[i] = nums[j];
                nums[j] = tmp;
            }
        }
    }

    return nums;
};

console.log(sortArray([5,1,1,2,0,0]));