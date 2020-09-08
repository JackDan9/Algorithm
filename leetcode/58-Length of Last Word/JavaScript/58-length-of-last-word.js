/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s.length === 0) {
    return 0;
  }
  var str = s.trim();
  var strArr = str.split(' ');
  return strArr[strArr.length - 1].length;
};