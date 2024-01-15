const prompt = require("prompt-sync")({ sigint: true });
let n = prompt("Enter the number for which you want number of digits : ");
n = parseInt(n);
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("Sum is :" + sum);
