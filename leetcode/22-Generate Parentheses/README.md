# 22. Generate Parentheses

```
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```

# url
- https://leetcode.com/problems/generate-parentheses/


数字 n 代表生成花括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例 1：

输入：n = 3
输出：["{{{}}}","{{}{}}","{{}}{}","{}{{}}","{}{}{}"]
示例 2：

输入：n = 1
输出：["{}"]
 

提示：

1 <= n <= 8