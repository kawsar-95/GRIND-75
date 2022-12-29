/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  let element = new Map();
  for (let num of nums) {
    element.set(num, (element.has(num) ? element.get(num) : 0) + 1);
    if (element.get(num) > nums.length / 2) return num;
  }
  return -1;
};