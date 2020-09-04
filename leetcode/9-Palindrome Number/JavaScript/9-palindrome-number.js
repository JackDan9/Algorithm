/**
* @param {number} x
* @return {boolean}
*/
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  var arr = [];

  while (x > 0) {
    arr.unshift(x % 10);
    x = parseInt(x / 10);
  }

  var left = 0;
  var len = arr.length;
  var right = len - 1;

  while (left < right) {
    if (arr[left] != arr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}