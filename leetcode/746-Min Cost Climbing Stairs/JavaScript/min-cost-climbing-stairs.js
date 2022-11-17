/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const len = cost.length;
  
  if (len === 1) return cost[0];
  if (len === 2) return Math.min(...cost);
  
  let res = [];
  res[0] = cost[0];
  res[1] = cost[1];
  
  let index = 2;
  while (index < len) {
    res[index] = cost[index] + Math.min(res[index - 1], res[index - 2]);
    ++index;
  }

  return Math.min(res[len-1], res[len-2]);
};
