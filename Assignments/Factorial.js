const prompt = require("prompt-sync")({ sigint: true });
let n = prompt("Enter the number for which you want the factorial : ");
n = parseInt(n);
console.log("The factorial of " + n + " is : ");
let factorialVal = 1;
for (let i = n; i >= 1; i--) {
  factorialVal = factorialVal * i;
}
console.log(factorialVal);
