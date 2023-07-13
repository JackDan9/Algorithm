/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange1 = function (nums, target) {
  if(nums.length < 1) {
    return [-1, -1];
  }

  var fI = firstIndex(nums, target);
  var lI = lastIndex(nums, target);

  return [fI, lI];
}

var firstIndex = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    let t = nums[mid];

    if (target === t && ((mid - 1) < 0 || nums[mid - 1] < target)) {
      return mid;
    }

    if (target > t) {
      l = mid + 1;
    }

    if (target <= t) {
      r = mid - 1;
    }
  }

  return -1;
}

var lastIndex = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    let t = nums[mid];

    if (target === t && ((mid + 1) >= nums.length || nums[mid + 1] > target)) {
      return mid;
    }

    if (target >= t) {
      l = mid + 1;
    }

    if (target < t) {
      r = mid - 1;
    }
  }

  return -1;
}

var searchRange = function (nums, target) {
  if(nums.length < 1) {
    return [-1, -1];
  }
  let l = nums.indexOf(target);

  let r = l;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === target) {
      r = i;
    }
  }
  
  // let r = nums.indexOf(target, l + 1) === -1 ? l : nums.indexOf(target, l + 1);
  return [l, r];
};




console.log(searchRange1([3, 3, 3], 3))