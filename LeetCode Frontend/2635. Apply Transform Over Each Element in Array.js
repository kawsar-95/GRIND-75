const map = function (arr, fn) {
  const returnedArray = []
  for (let i = 0; i < arr.length; i++) {
    returnedArray.push(fn(arr[i], i))

  }
  return returnedArray
}