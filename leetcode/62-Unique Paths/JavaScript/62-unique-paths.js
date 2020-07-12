/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  return rescursive(m, n, m, n);
};

var rescursive = function(m, n, i, j) {
  if ( i == 1 || j == 1) {
    return 1;
  } else if (i == 1) {
    return rescursive(m, n, i, j - 1);
  } else if (j == 1) {
    return rescursive(m, n, i - 1, j);
  } else {
    return rescursive(m, n, i - 1, j) + rescursive(m, n, i, j - 1);
  }
}

var result = uniquePaths(7, 3);
console.log(result);

