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
// let i = 0;
// do{
//   console.log("Loop will be executed once !!")
//   i++;
// }
// while(i==0);

// for in loop
// Note: for objects it will return value for array it will return index

// let obj = {
//   Dibyanshu: "25",
//   Company: "Resilient IT Services",
//   Address: {
//     District: "Bhagalpur",
//     State: "Bihar",
//   },
// };

// for (let key in obj) {
//   console.log(key, " : ", obj[key]);
// }

// let arr = [1,2,3];

// for(let i in arr)
// {
//   console.log(i);
// }

//for of loop
//Note: It returns value

// let arr1 = [1,2,3];

// for(let i of arr1)
// {
//   console.log(i);
// }

//Filter
// const checkpalindrome  = require("../Assignments/Palindrome");
// let arr1 = [1, 2, 3, 4, 5, 45, 43, 33, 44];
// function num(n) {
//   return checkpalindrome(n);
// }

// let value = arr1.filter(num);
// console.log(value);

//Map

// let arr1 = [1, 2, 3, 4, 5, 45, 43, 33, 44];
// function num(n) {//named function
//   return n%2==0;
// }

// let value = arr1.map(function(){ //anonymous function
// //code to perform function
// });
// console.log(value);

// Arrow function

// let oddNum = (n) => {
//   if (n % 2 == 1) console.log("Odd Number");
// };
// oddNum(11);

//set time out function
// setTimeout(() => {
//   console.log("Hi");
// }, 2000);

//set time interval function
// let count = 0;
// let id = setInterval(() => {
//   console.log("Hi");
//   count++;
//   if(count==3)
// clearInterval(id);
// }, 2000);