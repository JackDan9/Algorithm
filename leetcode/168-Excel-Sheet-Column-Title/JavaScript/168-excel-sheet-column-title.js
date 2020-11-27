/**
 * @param {number} n
 * @return {string}
 */
// var convertToTitle = function (n) {
//   var map = new Map();
//   for (let i = 0; i < 26; i++) {
//     map.set(i, String.fromCharCode(parseInt('A'.charCodeAt() + i)));
//   }

//   var result = new String();
//   while(n >= 0) {
//     n--;
//     result = result.concat(map.get(n % 26));
//     n = Math.floor(n / 26);
//     if(0 === n) {
//       break;
//     }
//   }
//   return result.split('').reverse().join('');
// };

var convertToTitle = function(n) {
  let _map = new Map();
  for (let i = 0; i < 26; i++) {
    _map.set(i, String.fromCharCode(parseInt('A'.charCodeAt() + i)));
  }

  let _result = new Array();
  while(n > 0) {
    n--;
    _result.unshift(_map.get(n % 26));
    n = Math.floor(n / 26);
    if(0 === n) {
      break;
    }
  }
  return _result.join('');
};