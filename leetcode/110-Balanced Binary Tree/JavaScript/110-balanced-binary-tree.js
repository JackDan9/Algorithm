/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return getDepth(root) >= 0;
}

var getDepth = function(treeNode) {
    if(!treeNode) {
        return 0;
    }
    let leftDepth = getDepth(treeNode.left);
    let rightDepth = getDepth(treeNode.right);

    if(leftDepth < 0 || rightDepth < 0 || Math.abs(leftDepth -  rightDepth) > 1) {
        return -1;
    }

    return Math.max(leftDepth, rightDepth) + 1;
}