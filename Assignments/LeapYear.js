const prompt = require("prompt-sync")({ sigint: true });
let year = prompt("Enter the year for which you want check LeapYear : ");
year = parseInt(year);
if (year % 100 == 0 && year % 400 == 0) {
  console.log("Leap Year !!");
} else if (year % 4 == 0) {
  if (year % 100 != 0) {
    console.log("Leap Year !!");
  } else {
    console.log("Not a leap year");
  }
} else {
  console.log("Not a leap year!!");
}
