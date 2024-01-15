const prompt = require("prompt-sync")({ sigint: true });
let n = prompt("Enter the number for which you want check Armstrong : ");
n = parseInt(n);
let num = n;
let sum = 0;
while (num > 0) {
  let rem = num % 10;
  sum = sum + rem * rem * rem;
  num = Math.floor(num / 10);
}
if (sum == n) {
  console.log("Armstrong Number !");
} else {
  console.log("Not a Armstrong Number");
}
