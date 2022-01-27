/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let _map = new Map();
  let _sLen = s.length;
  let _index = 0; 
  let _status = 0;
  let _sT = 0;
  while(_index < _sLen) {
    // let _mapLen = _map.get(s[_index]);
    // if(_mapLen === undefined) {
    //   _map.set(s[_index], _index);
    //   continue;
    // }
    // if(_mapLen >= _sT) {
    //   _status = Math.max(_status, _index - _status);
    //   _sT = _mapLen + 1;
    // }
    // _map.set(s[_index], _index);
    if(s[_index] !== s[_index + 1]) {
      _map.set()
    }

    _index++;
  }
  return _map;
};

console.log(lengthOfLongestSubstring("abcabcbba"));