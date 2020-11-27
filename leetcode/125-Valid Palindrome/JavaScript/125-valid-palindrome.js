/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    while (i < j && !isChar(s[i])) {
      i++;
    }
    while (i < j && !isChar(s[j])) {
      j--;
    }

    if (i < j && s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

var isChar = function (c) {
  if (122 >= parseInt(c.toLowerCase().charCodeAt(0)) >= 97) {
    return true;
  } else {
    return false
  }
};

// let a = "0P";
let b = "A man, a plan, a canal: Panama";
console.log(isPalindrome(b));