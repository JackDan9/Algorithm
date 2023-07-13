/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 1;
    let r = n;

    while (l < r) {
      let middle = Math.floor((l + r) / 2);

      if (isBadVersion(middle)) {
        r = middle;
      } else {
        l = middle + 1;
      }
    }

    return l;
  };
};