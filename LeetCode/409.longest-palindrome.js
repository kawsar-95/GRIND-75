/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s) {
  let map = new Map();
  let count = 0;
  let flag = false;
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }
  for (let [key, value] of map) {
    if (value % 2 === 0) {
      count += value;
    } else {
      count += value - 1;
      flag = true;
    }
  }
  if (flag) {
    count++;
  }
  return count;
};
// @lc code=end

