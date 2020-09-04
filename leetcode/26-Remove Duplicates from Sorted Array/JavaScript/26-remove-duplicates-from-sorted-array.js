var removeDuplicates = function(nums) {
  var len = nums.length - 1;
  
  while(len > 0) {
      if(nums[len - 1] === nums[len]) {
          nums.shift(nums[len]);
      }
      
      len = len - 1;
  }
  debugger;
  return nums.length;
};

var nums = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(nums);
