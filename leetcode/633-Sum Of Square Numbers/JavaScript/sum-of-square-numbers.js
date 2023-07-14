/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for(let i = 0; i * i < c; i++) {
    var b = Math.sqrt(c - i * i);
    if (Math.round(b) === Number(b)) {
      return true;
    }
  }

  return false;
};

console.log(judgeSquareSum(3));
