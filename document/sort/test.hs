// 3、一个字符串 s ，找出其中**不含有重复字符**的**最长子串**的长度。
// 输入: s = "abcabcbb" 输出: 3  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
function handleStr(str) {
  let map = new Map();
  // Math.max比较

  for(let i = 0, len = str.length; i < len; i++) {
    console.log(str[i]);
    
  }
}

console.log(handleStr("abcabcbb"));