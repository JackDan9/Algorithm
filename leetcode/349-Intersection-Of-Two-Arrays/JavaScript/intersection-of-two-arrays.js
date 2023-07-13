/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let len1 = nums1.length;
  let len2 = nums2.length;
  let set = new Set();

  for (let i = 0; i < len1; i++) {
    for (let j  = 0; j < len2; j++) {
      if (nums1[i] === nums2[j]) {
        set.add(nums1[i]);
      }
    }
  }

  return Array.from(set);
};