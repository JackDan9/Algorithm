/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums.sort();
  
  var target = nums.length / 2;
  var temp = [];
  var result = 0;

  nums.map((item) => {
    temp.push({
      key: item
    })
  });

  var _nums = temp.reduce((obj, item) => {
    var _find = obj.find(i => i.key === item.key);
    var _d = { key: item.key, frequency: 1 };
    _find ? _find.frequency++ : obj.push(_d);
    return obj; 
  }, []);

  _nums.map((item) => {
    if(item.frequency >= target) {
      result = item.key;
    }
  });

  return result;
};