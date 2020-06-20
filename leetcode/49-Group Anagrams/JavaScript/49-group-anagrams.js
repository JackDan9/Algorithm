/**
 * @param {string[]} strs
 * @return {string[][]}
 * runtime 200 ms	
 * memory 48.6 MB
 */
var groupAnagrams = function (strs) {
    var strsLen = strs.length;
    if (strsLen === 0) {
        return [];
    }
    if (strsLen === 1) {
        return [strs];
    }

    var result = new Object();
    var resultArr = new Array();
    for (var i = 0; i < strsLen; i++) {
        var check = Array.from(strs[i]).sort().join("");
        if (!result.hasOwnProperty(check)) {
            result[check] = [strs[i]]; 
        } else {
            result[check].push(strs[i]);
        }
    }
    for (var key in result) {
        resultArr.push(result[key]);
    }
    return resultArr;
}


/**
 * @param {string[]} strs
 * @return {string[][]}
 * runtime 124 ms	
 * memory 47.3 MB	
 */
var groupAnagrams = function (strs) {
    var strsLen = strs.length;
    if (strsLen === 0) {
        return [];
    }
    if (strsLen === 1) {
        return [strs];
    }

    var result = new Object();
    var resultArr = new Array();
    for (var i = 0; i < strsLen; i++) {
        var check = strs[i].split("").sort().join("");
        if (!result.hasOwnProperty(check)) {
            result[check] = [strs[i]]; 
        } else {
            result[check].push(strs[i]);
        }
    }
    for (var key in result) {
        resultArr.push(result[key]);
    }
    return resultArr;
}
