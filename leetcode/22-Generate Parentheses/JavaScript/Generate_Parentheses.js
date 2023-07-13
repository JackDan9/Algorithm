var generateParenthesis = function(n) {
  if (n === 0) return [];
  
  let res = ["()"];
  if (n === 1) return res;

  for (let i = 0; i < n - 1; i++) {
    let set = new Set();
    
    for (item of res) {
      for (let j = 0, len = item.length; j < len + 1; j++) {
        let temp = item.split("");
        temp.splice(j, 0, "()");
        set.add(temp.join(""));
      }
    }

    res = [...set];
  }
  return res;
};