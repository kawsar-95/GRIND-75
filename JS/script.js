//You JavaScript Code will go here
// var age = 32;

// if (age > 18) {
//   if (age > 30) {
//     console.log("You are a complete man")
//   } else if (age > 60) {
//     console.log('you are a Old Man')
//   } else {
//     console.log('you are  a young man')
//   }
// } else (
//   console.log('you are a child')
// )



function maxNum(num1, num2, num3) {
    var tmp = 0;
    if (num1 < num2 && num3 < num2) {
        tmp = num2;
    } else if (num3 < num1) {
        tmp = num1;
    } else {
        tmp = num3;
    }
    return tmp;
}
var arr = [];
for (var i = 0; i < 3; i++) {
    arr[i] = prompt("Enter a number");
}
console.log(maxNum.apply(this, arr));