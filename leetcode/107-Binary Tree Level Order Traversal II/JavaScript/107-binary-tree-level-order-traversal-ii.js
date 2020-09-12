/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var levelOrderBottom = function(root) {
    if(!root) {
        return [];
    }
    let _result  = [];
    let _queue = [];
    
    _queue.push(root);
    
    while(_queue && _queue.length > 0) {
        var _queueLen = _queue.length;
        var _temp = [];
        for(var i = 0; i < _queueLen; i++) {
            var _current = _queue.shift();
            _temp.push(_current.val);
            if(_current.left) {
                _queue.push(_current.left);
            }
            if(_current.right) {
                _queue.push(_current.right);
            }
        }
        _result.push(_temp);
    }

    return _result.reverse();
};