/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let res = [];

  for(let i = 1; i <= numbers.length; i++) {
    let j = i + 1;
    // for(let j = i + 1; j <= numbers.length; j++) {
      if (target === (numbers[i - 1] + numbers[j - 1])) {
        res = [i, j];
        break;
      }
    // }
  }

  return res;
}