/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  if (s.split('').sort().join('') === t.split('').sort().join('')) {
    return true;
  } else {
    return false;
  }
};