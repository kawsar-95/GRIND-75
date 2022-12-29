/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  const lengthOfArray = nums.length
  let low = 0
  let high = lengthOfArray - 1
  let result = -1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (nums[mid] > target) {
      high = mid - 1
    } else if (nums[mid] < target) {
      low = mid + 1
    } else {
      result = mid
      break
    }
  }

  return result
}