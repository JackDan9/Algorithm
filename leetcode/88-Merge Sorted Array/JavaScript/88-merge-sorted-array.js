/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var index = 0;
    while(index < n) {
        nums1[m + index] = nums2[index];
        index++;
    }
    nums1.sort((a, b) => {
        return a - b;
    });
};