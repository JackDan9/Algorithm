/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var len = strs.length;

  if(len === 0) {
    return "";
  }

  var strsLen = strs[0].length;

  for(var i = 1; i < len; i++) {
    strsLen = Math.min(strs[i].length, strsLen);
  }

  var resultPrefix = "";

  for(var j = 0; j < strsLen; j++) {
    var check = 0;

    for(var k = 1; k < len; k++) {
      if(strs[0][j] === strs[k][j]) {
        continue;
      } else {
        check++;
      }
    }

    if(check > 0) {
      break;
    } else {
      resultPrefix = resultPrefix + strs[0][j];
    }
  }

  return resultPrefix;
};