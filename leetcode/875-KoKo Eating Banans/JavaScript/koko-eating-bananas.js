/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// 速度s 
// 香蕉个数必须大于1 小于或者等于piles中的最大值，香蕉最多的数目肯定是不会超过的，所以s最大值肯定是小于等于piles中的最大值

// 我要再h小时吃完，速度就是 piles中的元素 pile / h(每小时吃多少)
// 但是反过来速度是s(每小时吃的个数), h小时内出完，h的值就需要是pile/s 

var minEatingSpeed = function (piles, h) {
  let min = 1;
  let max = Math.max(...piles);
  let res = max;

  while (min < max) {
    let s = max - min;

    let t = 0;

    for (let i = 0; i < piles.length; i++) {
      // 一个所花费的时间是piles[i] / s, 所有花费的时间长度为 t += piles[i] / s 向下取整，因为你需要的是完全吃完，向上取整是吃不完的情况
      // console.log(piles[i] / s);
      t += Math.ceil(piles[i]/ s); 
    }

    if (t <=  h) {
      res = s;
      max = s;
    } else {
      min = s + 1;
    }
  }

  return res;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));