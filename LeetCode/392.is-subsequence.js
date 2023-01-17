/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  let position1 = 0,
    position2 = 0;
  while (position1 < s.length && position2 < t.length) {
    if (s[position1] === t[position2]) {
      position1++;
      position2++;
    } else {
      position2++;
    }
  }
  return position1 === s.length;
};
// @lc code=end

