/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function pivotIndex(nums) {
  let totalSum = 0,
    leftSum = 0;
  nums.forEach((e) => {
    totalSum += e;
  });

  for (let i = 0; i < nums.length; i++) {
    if (totalSum - leftSum - nums[i] === leftSum) {
      return i;
    }

    leftSum += nums[i];
  }
  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// @lc code=end

