/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  var numsLen = nums.length;

  if (numsLen == 0) {
    return [];
  }

  if (numsLen == 1) {
    return [nums, []];
  }

  var result = [];

  var path = [];

  depth_first_search(nums, 0, path, result);

  return result;
}

var depth_first_search = function (nums, depth, path, result) {
  result.push(path.slice(0));
  while(depth < nums.length) {
    path.push(nums[depth]);

    depth_first_search(nums, depth=depth + 1, path, result);

    path.pop();
  }
}

var a = [1, 2, 3];
console.log(subsets(a));
