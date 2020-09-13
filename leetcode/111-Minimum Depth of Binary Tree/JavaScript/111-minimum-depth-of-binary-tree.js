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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) {
        return 0;
    }

    let queue = [];
    let depth = 0;
    queue.push(root);
    while(queue && queue.length > 0) {
        let len = queue.length;

        while(len > 0) {
            let current = queue.shift();
            if(current.left) {
                queue.push(current.left);
            }
            if(current.right) {
                queue.push(current.right);
            }
            if(!current.left && !current.right) {
                depth = depth + 1;
                return depth;
            }
            len--;
        }
        depth++;
    }
}