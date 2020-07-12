/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length;
    var n = grid[0].length;

    if (m < 0 || n < 0) {
      return 0;
    }

    for (var i = 1; i < m; i++) {
      grid[i][0] = grid[i - 1][0] + grid[i][0]; 
    }

    for (var j = 1; j < n; j++) {
      grid[0][j] = grid[0][j - 1] + grid[0][j];
    }

    for (var i = 1; i < m; i++) {
      for (var j = 1;  j < n; j++) {
        grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
      }
    }

    return grid[m - 1][n - 1];
};

var a = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];

var b = [
  [1, 8, 1]
];


var c = [
  [2],
  [4],
  [5]
];

var d = [
  [1,2,5],
  [3,2,1]
];

var result = minPathSum(a);
console.log(result);

var resultB = minPathSum(b);
console.log(resultB);

var resultC = minPathSum(c);
console.log(resultC);

var resultD = minPathSum(d);
console.log(resultD);