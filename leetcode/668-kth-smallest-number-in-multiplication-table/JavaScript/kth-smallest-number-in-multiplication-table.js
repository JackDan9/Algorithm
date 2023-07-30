/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
  let left = 1 * 1;
  let right = m * n;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let temp = Math.floor(mid / n) * n;

    for (let i = Math.floor(mid /n) + 1; i <= m; i++) {
      temp += Math.floor(mid / i);
    }

    if (temp >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
// var findKthNumber = function (m, n, k) {
//   let temp = [];
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       temp.push(i * j);
//     }
//   }

//   quickSort(temp, 1, temp.length - 1);

//   return temp[k];
// };

// const quickSort = function (nums, s, e) {
//   let l = s;
//   let r = e;

//   if (l >= r) {
//     return;
//   }

//   let t = nums[s];

//   while (l < r) {
//     while (l < r && t <= nums[r]) {
//       r--;
//     }

//     while (l < r && t >= nums[l]) {
//       l++;
//     }

//     [nums[l], nums[r]] = [nums[r], nums[l]];
//   }

//   [nums[s], nums[l]] = [nums[l], nums[s]];

//   quickSort(nums, s, l - 1);
//   quickSort(nums, l + 1, e);
// }


console.log(findKthNumber(3, 3, 5));