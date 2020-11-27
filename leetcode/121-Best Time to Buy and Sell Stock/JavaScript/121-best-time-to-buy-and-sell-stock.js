/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//   let len = prices.length;
//   let result = 0;
//   for(let i = 0; i < len; i++) {
//     for(let j = 0; j < len; j++) {
//       let temp = prices[j] - prices[i];
//       if(temp > result) {
//         result = temp;
//       }
//     }
//   }  
//   return result;
// };

// 时间复杂度太高

// var maxProfit = function(prices) {
//   let len = prices.length;
//   if(len === 0) {
//     return 0;
//   }

//   buy = [prices[0]];
//   profit = 0;
//   let temp = prices.splice(1);

//   for(let i = 0; i < temp.length; i++) {
//     if(temp[i] < buy[buy.length - 1]) {
//       buy.pop();
//       buy.push(temp[i]);
//     }
//     profit = Math.max(profit, temp[i] - buy[buy.length - 1]);
//   }

//   return profit;
// }
// while循环
var maxProfit = function(prices) {
  let len = prices.length;
  if(len === 0) {
    return 0;
  }

  buy = [prices[0]];

  let temp = prices.splice(1);
  let profit = 0;
  let index = 0;
  
  while(index < temp.length) {
    if(temp[index] < buy[buy.length - 1]) {
      temp.pop();
      temp.push(temp[index]);
    }
    profit = Math.max(profit, temp[index] - buy[buy.length - 1]);
  }

  return profit;
}