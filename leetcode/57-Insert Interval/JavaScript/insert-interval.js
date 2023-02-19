/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * 
 * 情况1 intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出：[[1,5],[6,9]]
 * 
 * intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出: [[1,2],[3,10],[12,16]]
 * 解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 */
var insert = function(intervals, newInterval) {
  let len = intervals.length;

  if (len && len > 0) {
    if (newInterval[1] < intervals[0][0]) {
      intervals.unshift(newInterval);
    } else if (newInterval[0] > intervals[intervals.length - 1][1]) {
      intervals.push(newInterval);
    } else {
      let res = [];
      for (let i = 0; i < len; i++) {
        if ((intervals[i][0] < newInterval[0] && newInterval[1] < intervals[i][1]) || intervals[i][0] > newInterval[1] || intervals[i][1] < newInterval[0]) {
          if (newInterval[0] > intervals[i][1] && newInterval[1] < intervals[i + 1][0]) {
            res.push(intervals[i]);
            res.push(newInterval);
          } else {
            res.push(intervals[i]);
          }
          
        } else {
          newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
          newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
          if(res && res.length > 0 && res[res.length - 1][0] === newInterval[0] && res[res.length - 1][1] === newInterval[1]) {
            continue;
          } else {
            res.push(newInterval);
          } 
        }
      }
      intervals = res;
    }    
  } else {
    intervals.push(newInterval);
  }
  return intervals;
};
insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]);
// insert([[1,3],[6,9]], [2,5]);
// insert([[1,5]], [2,7]);
// insert([[3,5],[12,15]], [6,6]);
// insert([[1,5]], [0,6]);
