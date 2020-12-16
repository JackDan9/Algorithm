/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
    let temp = new Map();
    let result = 0;
    let sum = 0;
    for(let i = 0; i < hours.length; ++i) {
        sum += hours[i] > 8 ? 1 : -1;
        if(sum > 0) {
            result = i + 1;
        } else {
            if(!temp.has(sum)) {
                temp.set(sum, i);
            }
            if(temp.has(sum - 1)) {
                result = Math.max(result, i - temp.get(sum - 1)); 
            }
        }
    }
    return result;
};