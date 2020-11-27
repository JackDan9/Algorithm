/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let index = 1;
  let len = prices.length;
  let resultProfit = 0;

  while (index < len) {
    if (prices[index] > prices[index - 1]) {
      resultProfit = resultProfit + prices[index] - prices[index - 1];
    }
    index++;
  }
  return resultProfit;
};

var a = [7,1,5,3,6,4];
console.log(maxProfit(a));