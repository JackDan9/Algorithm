/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var str = "1";

    while(--n) {
        var i = 0;
        while(i < str.length) {
            var count = 1;

            while(i + 1 < str.length && str[i] === str[i+1]) {
                ++i;
                ++count;
            }

            newStr += count + str;
            ++i;
        }
        str = newStr;
    }

    return str;
}