// 判断一个字符串是否是ip地址
// 192.168.1.1
// 172.16.7.84
// 99.16.1.1
// 1.1.1.1.1
// aaa.aaa.aaa.aa
function isIp(str1) {
  let strArr = str1.split('.');
  let len = strArr.length;
  if(len !== 4) {
    return false;
  } else {
    for(let i = 0; i < len; i++) {
      if(strArr[i].indexof())
      if(parseInt(strArr[i]) <= 0 || parseInt(strArr[i]) > 255) {
        return false
      }
    }
    return true; 
  }
}

let ip = '001.111.111.1'; // false
let ip1 = '0.1.1.1'; // false
let ip2 = '255.255.255.255'; // true
let ip3 = 'aaa.1.1.1'; // false
let ip4 = '1.1'; // false
let ip5 = ''

console.log(isIp(ip)); 
console.log(isIp(ip1));
console.log(isIp(ip2));
console.log(isIp(ip3));
console.log(isIp(ip4));