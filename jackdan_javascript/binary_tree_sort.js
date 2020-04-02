function BinaryTree() {

    var Node = function(key) { // 节点定义
        this.key = key; // 节点值
        this.left = null; // 左孩子
        this.right = null; // 右孩子
    }

    var root = null; // 二叉树的根节点初始化为空

    // 插入规则insertNode()
    var insertNode = function(node, newNode) {
        if(node.key > newNode.key) { // 如果新节点值小于根节点就插到左边
            if(node.left === null) {
                node.left = newNode; // 根节点没有左孩子, 新节点就直接做它的左孩子
            } else {
                insertNode(node.left, newNode); // 根节点有左孩子, 就按照插入规则插到左孩子的下边(再来一次)
            }
        } else {
            if(node.right === null) { // 根节点没有右孩子, 新节点就直接做它的右孩子
                node.right = newNode;
            } else {
                insertNode(node.right, newNode); // 根节点有右孩子, 就按照插入规则插到右孩子的下边(再来一次)
            }
        }
    }

    this.insert = function(key) { // 二叉树的插入方法
        var newNode = new Node(key); // 新建出对应的节点
        if(root === null) { // 如果根节点为null, 就把该节点作为根节点
            root = newNode;
        } else {
            insertNode(root, newNode); // 根节点不是空的, 就按照排序二叉树规则插入新节点
        }
    };
}

var arr = [8, 3, 10, 1, 7, 6, 13, 4, 14];
var binaryTree = new BinaryTree();
arr.forEach(function(key) {
    binaryTree.insert(key);
});
