/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return depth_firse_search(0, nums.length - 1, nums);
};

var depth_firse_search = function(left, right, nums) {
    let end = right - left + 1;

    if(end < 0) {
        return;
    }
    let middle = Math.floor(end / 2);
    let top = new TreeNode(nums[left + middle]);

    top.left = depth_firse_search(left, left + middle - 1, nums);
    top.right = depth_firse_search(left + middle + 1, right, nums);

    return top;
};