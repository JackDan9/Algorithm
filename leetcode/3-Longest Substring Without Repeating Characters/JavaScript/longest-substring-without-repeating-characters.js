/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let _sLen = s.length; 
  
  let i = 0;
  let j = 0;

  let map = new Map();
  let res = 0;

  while (i < _sLen && j < _sLen) {
    i = Math.max(map.get(s[j]) || 0, i);
    res = Math.max(res, j - i + 1);
    map.set(s[j], j+1);
    j++;  
  }

  // console.log(res);
  return res;
};

console.log(lengthOfLongestSubstring("abcabcbb"));