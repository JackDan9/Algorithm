// var test_quick_sort = function(arr, begin, end) {
//   var arrLen = arr.length;

//   if(begin >= end) {
//     return;
//   }

//   var left = begin;
//   var right = end;

//   var temp = arr[begin];

//   while(left < right) {
//     while(left < right && arr[right] >= temp) {
//       right--
//     }

//     while(left < right && arr[left] <= temp) {
//       left++;
//     }

//     [arr[left], arr[right]] = [arr[right], arr[left]];
//   }

//   [arr[begin], arr[left]] = [arr[left], arr[begin]];
//   test_quick_sort(arr, left+1, end);
//   test_quick_sort(arr, begin, left-1);
// }


// function f() { console.log('I am outside!'); }

// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }

//   f();
// }());