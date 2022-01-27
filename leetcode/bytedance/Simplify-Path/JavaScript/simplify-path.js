/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let pathArr = path.split("/");
  let tArr = [];
  for(let i = 0; i < pathArr.length; i++) {
    if(pathArr[i] === '..' && tArr.length > 0) {
      tArr.pop();
    }
    if(pathArr[i] !== '.' && pathArr[i] !== '' && pathArr[i] !== '..') {
      tArr.push(pathArr[i]);
    }
  }
  // console.log(tArr);
  return '/' + tArr.join('/');
};

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/a/./b/../../c/"));