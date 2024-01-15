const prompt = require("prompt-sync")({ sigint: true });
let n = prompt("Enter the number for which you want check prime : ");
n = parseInt(n);
let flag = true;
for (let i = 2; i < n / 2; i++) {
  if (n % i == 0) {
    flag = false;
    break;
  }
}
if (flag == true) {
  console.log("Prime Number!!");
} else {
  console.log("Not a prime Number !!");
}
