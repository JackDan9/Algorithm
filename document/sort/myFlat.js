// 柯里化函数
// [1,2,3,4,[5,6,7,[8,9,0]]…]
// num === infinity
// [1,2 3,4,5,6,7,8,9,0]
// 方案一: 递归调用
Array.prototype.myFlat = function(arr, num) {
  if(!Array.isArray(arr)) {
    return [];
  } else {
    let res = []; // 新的result值去接受柯里化的值
    while(num >= 0) {
      for(let i = 0, len = arr.length; i < len; i++) {
        if(Array.isArray(arr[i])) {
          
        }
      }
      num--;
    }
  }
}