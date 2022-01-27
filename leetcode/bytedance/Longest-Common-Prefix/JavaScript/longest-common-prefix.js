/**
 * @param {string[]} strs
 * @return {string}
 * 1. 循环遍历，找出最短长度的string
 * 
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return "";
  let startStr = strs[0];
  strs.map((str) => {
    while(!str.startsWith(startStr)) {
      if(startStr.length === 0) return "";
      startStr = startStr.substring(0, startStr.length - 1);
    }
  });
  return startStr;
};

// console.log(longestCommonPrefix(["flower","flow","flight"]));
// console.log(longestCommonPrefix(["aaaaaa", "ab"]));
// console.log(longestCommonPrefix(["aaaaaa"]));
// console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["cir","car"]));
// console.log(longestCommonPrefix(["ab", "b"]));