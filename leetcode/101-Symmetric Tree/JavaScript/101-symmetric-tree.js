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
var isSymmetric = function(root) {
    if(!root) {
        return true;
    }

    return isSameTree(root.left, root.right);
};

var isSameTree = function(l, r) {
    if(l && r) {
        return ((l.val === r.val) && isSameTree(l.right, r.left) && isSameTree(l.left, r.right));
    }

    return l === r;
};