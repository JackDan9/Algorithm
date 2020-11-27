/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var smallestDifference = function(a, b) {
    let lenA = a.length;
    let lenB = b.length;

    let i = 0;
    let result = Infinity;
    while(i < lenA) {
        let j = 0;
        while(j < lenB) {
            result = Math.min(result, Math.abs(a[i] - b[j]));
            j++;
        }
        i++
    }
    return result;
};