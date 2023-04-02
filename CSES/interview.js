// 1. Reverse String
// 1st Solution

const reverseString = (str) => {
  const arr = str.split("")
  arr.reverse()
  str = arr.join("")
  console.log(str)
}
// reverseString('apple')

// 2nd Solution

(function (str) {
  let reversed = ''
  for (let character of str) {
    reversed = character + reversed
  }
  console.log({
    reversed_val: reversed
  })

})('greetings')


// 2. Reverse Integer

const reverseInteger1 = (num) => {
  return parseInt(num.toString().split('').reverse().join(''))
}
console.log({
  testCase: reverseInteger1(2345)
})

// For Negative Integer

const reverseInteger2 = (num) => {
  if (num < 0)
    return -1 * parseInt(num.toString().split('').reverse().join(''))
  return parseInt(num.toString().split('').reverse().join(''))

}
console.log({
  testCase: reverseInteger2(-15)
})

// Find Palindrome

const palindrome = (str) => {

  const isPalindrome = str.split("").reverse().join("")
  console.log(str === isPalindrome)
}
// palindrome('abba')



//2nd Solution Palindrome

(function (str) {
  let reversed = ''
  for (let x of str) {
    reversed = x + reversed
  }
  console.log(str === reversed)

})('david')


//  03.How to find the maximum character in a string and how many times it appear

const maximumChar = (str) => {
  let obj = {}
  for (let char of str)
    (!obj[char]) ? obj[char] = 1 : obj[char]++

  console.log(obj)

  let maxNum = 0;
  let maxChar = ''

  for (let char in obj) {
    if (obj[char] >= maxNum) {
      maxNum = obj[char];
      maxChar = char;
    }
    console.log(`${maxChar} appears ${maxNum} times `)
  }
}
// maximumChar('asdfghjklkjhgfghjk')


//Classical Fizzbuzz

((num) => {
  for (let i = 1; i <= 15; i++) {

    //check 15
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
      ++i;
    }
    if (i % 3 === 0) {
      console.log('Fizz');
      ++i;
    }
    if (i % 5 === 0) {
      console.log('buzz');
      ++i;
    }
    if (i % 3 === 0) {
      console.log('Fizz');
      ++i;
    }
    if (i > num) break;
    else {
      console.log(i)
    }
  }
})(15)

