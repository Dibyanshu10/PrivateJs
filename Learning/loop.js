//loops in javascript

//ternery operator with integrated function
// const prompt = require("prompt-sync")({ sigint: true });
// let x = prompt("Enter the first number : ");
// let y = prompt("Enter the Second number : ");
// x = parseInt(x);
// y = parseInt(y);
// let result = x > y ? isEven(x) : IsPrime(y);
// function isEven(n) {
//   if (n % 2 == 0) {
//     console.log("Even number");
//   } else {
//     console.log("Odd Number");
//   }
// }
// function IsPrime(n) {
//   let flag = true;
//   for (let i = 2; i < n / 2; i++) {
//     if (n % i == 0) {
//       flag = false;
//       break;
//     }
//   }

//   if (flag == true) {
//     console.log("Prime Number!!");
//   } else {
//     console.log("Not a prime number!!");
//   }
// }

//while loop

//Printing squares of first 1o integers
// let counter = 0;
// let i = 1;
// while (counter < 10) {
//   let squareVal = i * i;
//   console.log(squareVal);
//   i++;
//   counter++;
// }

//do - while
let i = 0;
do{
  console.log("Loop will be executed once !!")
  i++;
}
while(i==0);