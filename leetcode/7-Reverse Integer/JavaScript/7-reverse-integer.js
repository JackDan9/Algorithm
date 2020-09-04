/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var xStr = x.toString();
  var xArr = xStr.split('');
  var flag = true;
  if (xArr[0] === '-') {
    flag = false;
    xArr = xArr.splice(1);
  }

  var xReverseStr = xArr.reverse().join('');

  if (!flag) {
    xReverseStr = '-' + xReverseStr;
    if (parseInt(xReverseStr) < -Math.pow(2, 31) || parseInt(xReverseStr) > (Math.pow(2, 31) - 1)) {
      return 0;
    }
    return parseInt(xReverseStr);
  } else {
    if (parseInt(xReverseStr) < -Math.pow(2, 31) || parseInt(xReverseStr) > (Math.pow(2, 31) - 1)) {
      return 0;
    }
    return parseInt(xReverseStr);
  }
};