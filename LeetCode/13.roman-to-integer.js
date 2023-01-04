/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  let conversion = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    // first symbol
    total += conversion[s[i]];
    // if current symbol is bigger than previous symbol
    // subtract 2 times of the previous value
    if (i > 0 && conversion[s[i]] > conversion[s[i - 1]])
      total -= 2 * conversion[s[i - 1]];
  }
  return total;
};
// @lc code=end

