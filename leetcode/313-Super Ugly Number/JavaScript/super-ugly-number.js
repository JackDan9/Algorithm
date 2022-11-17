/**
 * @param {number} n
 * @param {number[]} primes 质数数组
 * @return {number}
 */
// 找到所有质因数
// 从小到大排序
// 输出第n个质因数
// 质因数(素因数或者质因子)在数论里是指能整除给定整数的质数。
// 质数: 质数是通过因式分解算出来的，质数定义是在大于1的自然数中除了1和它本身以外不再有其他因素的数称为质数。
// 素数就是质数，即除了1和它本身以外任何数都不能整除它的数。
// 丑数: 只包含质因子2,3,5的正整数。比如6,8就是丑数，但是14不是丑数因为它包含了质因子 7。
// 超级丑数: 正整数并且所有的质数因子都在所给定的一个大小为k的质数集合内。
// 比如: 4个质数的集合[2,7,13,19], 那么[1,2,4,7,8,13,14,16,19,26,28,32]是前12个超级丑数。
// 注意事项: 1 永远都是超级丑数不管给的质数集合是什么。
// 给你的质数集合已经按照升序排列。
// 0 < k <= 100, 0 < n <= 10^6, 0 < primes[i] < 1000

//


var nthSuperUglyNumber = function(n, primes) {
  let len = primes.length;
  
  if (!primes || len < 1 || n < 1) {
    return 0;
  }

  let res = new Array(n);
  res[0] = 1;
  let next = new Array(len).fill(0);
  let index = 1;
  
  while (index < n) {
    let nextNum = Number.MAX_SAFE_INTEGER;

    for (let j = 0; j < len; j++) {
      let temp = res[next[j]] * primes[j];

      if (temp < nextNum) {
        nextNum = temp;
      }
    }

    res[index] = nextNum;

    for (let k = 0; k < len; k++) {
      while (res[next[k]] * primes[k] <= res[index]) {
        next[k]++;
      }
    }
    index++;
  }

  return res[n - 1];
};

nthSuperUglyNumber(12, [2,7,13,19]);