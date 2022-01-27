/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(num1 === '0' || num2 === '0') return '0';
  if(num1 === '1') return num2;
  if(num2 === '1') return num1;
  
  // let iLen = num1.length;
  // let jLen = num2.length;
  // let _num1 = num2;
  // let _num2 = num1;

  // if(num1.length > num2.length) {
  //   iLen = num2.length;
  //   jLen = num1.length;
  //   _num1 = num2;
  //   _num2 = num1;
  // }

  // let minLen = Math.min(num1.length, num2.length);

  // let count1 = 0;
  // let sum = 0;
  let res = [];

  for(let i = num1.length - 1; i >= 0; i--) {
    // let count = 0;
    // let b = 0;
    // let flag = 0;
    for(let j = num2.length - 1; j >= 0; j--) {
      index1 = i + j + 1;
      index2 = i + j;

      let a = num1[i] * num2[j] + (res[index1] || 0);

      res[index1] = a % 10;
      res[index2] = Math.floor(a / 10) + (res[index2] || 0);
      // 超大的数
      // count++;
    }
    // console.log("flag: ", flag);
    // if(flag !== 0) {
    //   b = b + flag * Math.pow(10, (b.toString()).length);
    // }
    // count1 = count1 + 1;
    // if(count1 - 1 === minLen) {
    //   break;
    // }
    // console.log("b: ", b);
    // sum = sum + b * Math.pow(10, count1 - 1);
  }
  return res.join('').replace(/^0+/, '');
  // return sum.toString();
};

console.log(multiply("9", "99"));