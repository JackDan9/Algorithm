/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let _map = new Map();

    let res = [];

    let i = 0;

    while (i < s.length) {
        if (_map.has(s[i])) {
            let _index = _map.get(s[i]);
            _map.set(s[i], _index + 1); 
        } else {
            _map.set(s[i], 1);
        }
        i++;
    }


    _map.forEach((v, k) => {
        if (parseInt(v) === 1) {
            res.push(s.indexOf(k));
        }
    });

    return res.length > 0 ? res[0] : -1;
};


console.log(firstUniqChar("leetcode"));