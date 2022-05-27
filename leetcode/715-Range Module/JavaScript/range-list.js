class RangeList {

  constructor() {
    this.resultRange = [];
  }

  /**
   * @description Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.} range 
   * @returns {void}
   */
  add(range) {
    if (range.length === 0) {
      return;
    } else {
      let i = 0;

      while (i < this.resultRange.length && this.resultRange[i][1] < range[0]) {
        i++;
      }

      while (i < this.resultRange.length && this.resultRange[i][0] <= range[1]) {
        range = [Math.min(range[0], this.resultRange[i][0]), Math.max(range[1], this.resultRange[i][1])];
        this.resultRange.splice(i, 1);
      }

      this.resultRange.splice(i, 0, range);
    }
  }

  /**
   * @description Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   * @returns {void}
   */
  remove(range) {
    if (this.resultRange.length === 0 || range.length === 0) return;

    let left = range[0];
    let right = range[1];

    let min = this.resultRange[0][0], max = this.resultRange[this.resultRange.length - 1][1];

    if (min > right || max < left) return;

    for (let i = 0; i < this.resultRange.length; i++) {
      let currentRange = this.resultRange[i];

      if (currentRange[0] <= left && currentRange[1] >= right) {
        if (currentRange[0] === left && currentRange[1] !== right) {
          currentRange[0] = right;
        } else if (currentRange[0] !== left && currentRange[1] === right) {
          currentRange[1] = left;
        } else if (currentRange[0] === left && currentRange[1] === right) {
          this.resultRange.splice(i, 1);
        } else {
          let temp = [right, currentRange[1]];
          currentRange[1] = left;
          this.resultRange.splice(i + 1, 0, temp);
        }
        return;
      }

      if (currentRange[0] < left && currentRange[1] >= left && currentRange[1] < right) {
        currentRange[1] = left;
        continue;
      }

      if (currentRange[0] <= right && currentRange[1] > right && currentRange[0] > left) {
        currentRange[0] = right;
        return;
      }

      if (currentRange[0] > left && currentRange[1] < right) {
        this.resultRange.splice(i, 1);
        i--;
      }
    }
  }

  /**
   * @description Prints out the list of ranges in the range list
   */
  print() {
    let i = 0;

    let result = "";
    while (i < this.resultRange.length) {
      result = result + " " + "[" + this.resultRange[i][0] + ", " + this.resultRange[i][1] + ")";
      i++;
    }
    console.log(result);
    return result;
  }
}

// Example run
const rl = new RangeList();
rl.add([1, 5]);
rl.print();
// Should display: [1, 5)
rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)
rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)
rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)