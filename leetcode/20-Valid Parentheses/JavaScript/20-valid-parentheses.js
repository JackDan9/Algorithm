/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length % 2 === 1) {
    return false;
  }

  let map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ]);

  let res = [];

  for(let ch of s) {

    if(map.has(ch)) {
      if (!res.length || res[res.length - 1] !== map.get(ch)) {
        return false;
      }
      res.pop();
    } else {
      res.push(ch);
    }
  }
  return !res.length;
}

let s = "{[]}";
console.log(isValid(s));