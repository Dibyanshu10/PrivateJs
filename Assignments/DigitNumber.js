const prompt = require("prompt-sync")({ sigint: true });
let n = prompt("Enter the number for which you want number of digits : ");
n = parseInt(n);
let num = n;
let sum = 0;
while (n > 0) {
  let rem = n % 10;
  sum++;
  n = Math.floor(n / 10);
}
console.log("Total number of digits :" + sum);
