/**
 * @param {Function} fn
 */
function memoize(fn) {

  let dp = new Map();

  return function (...args) {

    let key = JSON.stringify(args);
    if (dp.has(key)) {
      return dp.get(key);
    }
    let ans = fn(...args);
    dp.set(key, ans);

    return ans;
  }
}


/** 
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*	 callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/