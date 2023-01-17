/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const smap = {};
  const tmap = {};

  for (let i = 0; i < s.length; i++) {
    if (!smap.hasOwnProperty(s[i])) {
      smap[s[i]] = t[i];
    }
    if (!tmap.hasOwnProperty(t[i])) {
      tmap[t[i]] = s[i];
    }

    if (smap[s[i]] !== t[i] || tmap[t[i]] !== s[i]) return false;

  }

  return true;
};
// @lc code=end

