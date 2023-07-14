/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num < 0) {
    return false;
  }

  let l = 0;
  let r = num;

  let mid = (l + r) / 2;
  let prevMid;
  do {
    if (mid * mid > num) {
      r = mid;
    } else {
      l = mid;
    }

    prevMid = mid;

    mid = (l + r) / 2;
  } while (Math.abs(prevMid - mid) > 0);

  return Number.isInteger(mid);
};

console.log(isPerfectSquare(14))