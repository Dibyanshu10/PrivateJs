//JavaScript basic tutorial
let arr = ["23", false, 12];
console.log(arr);

//copying array into another array
let newarr = [...arr, 12, "Dibyanshu"];
console.log(newarr);

// Object type in js

let obj = {
  Dibyanshu: "25",
  Company: "Resilient IT Services",
  Address: {
    District: "Bhagalpur",
    State: "Bihar",
  },
};

//console.log(obj, typeof obj);
console.log(Object.keys(obj));
console.log(obj.Company);
