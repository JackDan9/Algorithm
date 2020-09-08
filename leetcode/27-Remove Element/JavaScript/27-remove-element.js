/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var len = nums.length - 1;
  var i = 0;

  while (i <= len) {
    var index = nums.indexOf(val);
    if (index > -1) {
      nums.splice(index, 1);
    }
    i++;
  }

  return nums.length;
};