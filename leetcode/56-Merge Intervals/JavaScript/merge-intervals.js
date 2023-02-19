/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 解析: 一共四种情况
 * 1. 存在[1,3], 新插入进来的[2,6] => return [1, 6]
 * 2. 存在[3,4], 新插入进来的[2,6] => return [2, 6]
 * 3. 存在[1,7], 新插入进来的[2,6] => return [1, 7]
 * 4, 存在[0,1], 新插入进来的[2,6] => return [0,1],[2,6]
 * 5. 存在[[1,4],[0,4]]
 * 6. [[1,4],[0,4]]
 * 7. [[2,3],[4,5],[6,7],[8,9],[1,10]]
 */
var merge = function (intervals) {
  let len = intervals.length;
  let res = [];

  for (let j = 0; j < len; j++) {
    for (let k = j + 1; k < len; k++) {
      if (intervals[j][0] > intervals[k][0]) {
        let temp = intervals[j];
        intervals[j] = intervals[k];
        intervals[k] = temp;
      }
    }
  }
  
  res.push(intervals[0]);

  for (let i = 1; i < len; i++) {
    if (res[res.length - 1][0] >= intervals[i][0] && res[res.length - 1][1] <= intervals[i][1]) {
      res.splice(res.length - 1, 1, intervals[i]);
    } else if (res[res.length - 1][1] < intervals[i][0] || res[res.length - 1][0] > intervals[i][1]) {
      res.push(intervals[i]);
    } else {
      let temp = [Math.min(res[res.length - 1][0], intervals[i][0]), Math.max(res[res.length - 1][1], intervals[i][1])];
      res.splice(res.length - 1, 1, temp);
    }
  }
  return res;
};

console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]));