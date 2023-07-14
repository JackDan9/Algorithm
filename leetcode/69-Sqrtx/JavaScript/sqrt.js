/**
 * @param {number} x
 * @return {number}
 */
// 进阶版，实现pow函数
var mySqrt = function (x) {
  Math.pow()
  return _pow(x, -2);

};
var _pow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let pow = 1;
  while (!!n) {
    // n % 2
    if (n & 1) {
      pow *= x;
    }

    x *= x;
    // n = n / 2;
    n >>= 1;
  }

  return pow;
}

console.log(mySqrt(4));