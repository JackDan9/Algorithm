/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * 1. 得知道s1所有的排列
 * 2. 排列是否存在s2中的子串
 */

const anagrams = (str) => {
  if (str.length <= 2) {
    return str.length === 2 ? [str, str[1] + str[0]] : [str];
  }
  else{
    return str.split('').reduce((acc, letter, i) =>
      acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
  }
};

var checkInclusion = function(s1, s2) {
  if(s1.length === 0) return true;
  if(s2.length === 0) return false;
  if(s1.length > s2.length) return false;
  for(let j = 0; j < s1.length; j++) {
    if(s2.indexOf(s1[j]) === -1) {
      return false;
    }
  }
  let index = 0;
  // while(index < s1.length) {
  //   if(s2.indexOf(s1[index]) !== -1) {
  //     let s2Index = s2.indexOf(s1[index]);
  //     if(s2Index === 0) {
  //       if(s1.indexOf(s2[s2Index + 1]) === -1 && s1.length > 1) {
  //         return false;
  //       }
  //     }
  //     if(s2Index === s2.length - 1) {
  //       if(s1.indexOf(s2[s2Index - 1]) === -1) {
  //         return false;
  //       }
  //     }
  //     if(s1.length > 1 && s1.indexOf(s2[s2Index - 1]) === -1 && s1.indexOf(s2[s2Index + 1]) === -1) {
  //       return false;
  //     }
  //   }
  //   index++;
  // }
  let s1Arr = s1.split("");
  let s2Arr = s2.split("");
  let isRestart = 0;
  let isBack = false;
  
  // while(index < s2Arr.length) {
  //   if(s1Arr.length > 0) {
  //     isBack = false;
  //     if(s1Arr.indexOf(s2Arr[index]) > -1) {
  //       console.log(s1Arr.indexOf(s2Arr[index]));
  //       // console.log("before splice: ", s1Arr);
  //       s1Arr.splice(s1Arr.indexOf(s2Arr[index]), 1);
  //       console.log(s1Arr);
  //       if(s1Arr.length === 0) {
  //         return true;
  //       }
  //     } else {
  //       if(isRestart !== 0) {
  //         isBack = false;
  //       } else {
  //         isBack = true;
  //       }
  //       s1Arr = s1.split("");
  //       if(isBack) {
  //         // index = index - 1;
  //         index--;
  //         isRestart = 0;
  //       }
  //       isRestart++;
  //     }
  //   } else {
  //     return true;
  //   }
  //   index++;
  // }
  // return false;
};
// s1 = "ab" s2 = "eidbaooo"
// s1= "ab" s2 = "eidboaoo"
console.log(checkInclusion("adc", "dcda"));
// console.log(checkInclusion("a","ab"));
// console.log(checkInclusion("hello", "ooolleoooleh"));