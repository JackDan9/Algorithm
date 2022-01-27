/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let sArr = s.split(" ");
  if(sArr.length < 1) return s;
  let resArr = [];
  console.log(sArr.length);
  for(let i = sArr.length - 1; i >= 0; i--) {
    if(sArr[i]) resArr.push(sArr[i]);
  }
  return resArr.join(" ");
};

// 输入：s = "a good   example"
// 输出："example good a"

// 输入：s = "the sky is blue"
// 输出："blue is sky the"

console.log(reverseWords("a good   example"))