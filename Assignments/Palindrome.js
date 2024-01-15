const prompt = require("prompt-sync")({ sigint: true });
let n = prompt("Enter the number for which you want check Palindrome : ");
n = parseInt(Math.abs(n));
let num = n;
let sum = 0;
while (n > 0) {
  let rem = n % 10;
  sum = sum * 10 + rem;
  n = Math.floor(n / 10);
}
if (sum == num) {
  console.log("Palindrome Number !!");
} else {
  console.log("Not a palindrome Number !!!");
}
