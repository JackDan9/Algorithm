# Binary Tree Sort
## 排序二叉树
- 左子树小于根节点，右子树大于根节点, 子树也满足这样的条件，这样的树叫做排序二叉树
- 所有JavaScript构建这样一个二叉树的规程如下:

``` javascript
var BinaryTree = {
    var Node = function () {} // 定义二叉树的节点Node
    var root = null; // 初始化根节点null;
    this.insert = function(key) {} // 定义二叉树的插入方法
}
```

## 分解上面的各个模块
### 插入方法`insert()`

``` javascript
this.insert = function(key) { // 需要插入的数值
    var node = new Node(key); // 创建对应的节点
    if(root === null) {
        root = node;
    } // 没有根节点的话就创建跟阶段
    else {
        insertNode(root, node); // 有根节点的话就要按照特有的insertNode方法去插入(所以这里下一步跳到insertNode)
    }
}
```

### 定义Node节点的内容: key, left, right.

``` javascript
var Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
}
```

### insertNode方法

``` javascript
function insertNode(node, newNode) { // 分别表示插入时的参考点, 要插的点。
    if(node.key > newNode.key) { // 先判断值, 如果小于参考点, 就放左侧
        if(node.left == null) { // 左孩子是空, 就直接做它左孩子
            node.left = newNode;
        } else { // 左孩子非空, 就要根左孩子再比较, 还用这个方法
            insertNode(node.left, newNode);
        }
    } else { // 大于参考点, 放在右侧
        if(node.right === null) { // 右孩子是空, 就直接做它右孩子
            node.right = newNode;
        } else {
            insertNode(node.right, newNode);
        }
    }

}
```

### 完整代码

``` javascript
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
            if(node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
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
```

### Example
``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta chartset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="实现二叉树排序" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>实现二叉树排序</title>
        <script type="text/javascript">
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
                        if(node.right === null) {
                            node.right = newNode;
                        } else {
                            insertNode(node.right, newNode);
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
        </script>
    </head>
    <body>
    </body>
</html>
```

------

> Thinking in JackDan


