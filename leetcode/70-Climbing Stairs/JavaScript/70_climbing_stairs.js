/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//   if(n < 0) {
//     return 0;
//   } else if (n == 1) {
//     return 1
//   } else if (n == 2) {
//     return 2
//   } else {
//     return climbStairs(n - 1) + climbStairs(n - 2);
//   }
// };

var climbStairs = function(n) {
  var firstStep = 1;
  var secondStep = 1;

  var resultStep = 0;

  if (n === 0) {
    return firstStep;
  }
  if (n === 1) {
    return secondStep;
  }

  var index = 2;
  while (index <= n) {
    resultStep = firstStep + secondStep;
    firstStep = secondStep;
    secondStep = resultStep;
    index++;
  }

  return resultStep;
}

var a = climbStairs(45);

console.log(a);
