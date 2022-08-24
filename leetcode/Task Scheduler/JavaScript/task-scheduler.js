/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function (tasks, n) {
    let taskCountMap = new Map();
    let count = 1;
    tasks.map((item) => {
      if (!taskCountMap.has(item)) {
        taskCountMap.set(item, count);
      } else {
        taskCountMap.set(item, taskCountMap.get(item) + 1);
      }
    })
  
    let taskCountMax = 0;
    for (taskCount of taskCountMap.values()) {
      taskCountMax = Math.max(taskCountMax, taskCount);
    }
  
    let pendingNum = 0;
    for (taskCount of taskCountMap.values()) {
      if (taskCount === taskCountMax) {
        pendingNum = pendingNum + 1;
      }
    }
  
    return Math.max(tasks.length, (taskCountMax - 1) * (n + 1) + pendingNum);
  };