/**
 * 滑动窗口
 * 
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0; // 左指针
  let right = 0; // 右指针

  let res = 0;

  let map = new Map();
  
  while (left < s.length && right < s.length) {
    if (!map.has(s[right])) {
      map.set(s[right]);
      right++;
      res = Math.max(res, right - left);
    } else {
      map.delete(s[left]);
      left++;
    }
  }

  return res;
}

console.log(lengthOfLongestSubstring("abcabcbb"));