const prompt = require("prompt-sync")({ sigint: true });
const n = prompt("Enter the number for which you want the table : ");
n = parseInt(n);
console.log("The table of " + n + " is : ");
for (let i = 1; i <= 10; i++) {
  console.log(n * i);
}