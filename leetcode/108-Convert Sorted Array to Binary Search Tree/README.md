# 108. Convert Sorted Array to Binary Search Tree
## Easy

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:
``` javascript
Given the sorted array: [-10,-3,0,5,9],
```
One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
```javascript
      0
     / \
   -3   9
   /   /
 -10  5
```

## 平衡二叉树，即对于树上任意一个节点，其左右子树的高度差不超过1
## 若两颗子树节点数量相同，且使用同样的方法来进行构造。那么它们的形态应该是相同的，层数也相同。举个例子：
```javascript
     1
    / \
   X   Y
  / \ / \
  X X Y Y
```

## 若两颗子树节点数量相差1，则构造出的子树层数至多相差1。举个例子：
```javascript
     1
    / \
   X   Y
  / \ / 
  X X Z 
```
## 其中Y子树的左子树层数为1，右子树层数为0。

## 我们只需要保证每一次递归处理构造的左右子树节点数量最多不超过1，就可以保证生成的二叉树满足高度平衡的性质。

## 因此，我们每一次以中位数进行分割，将数组分割为左右两个部分并递归构造二叉树。