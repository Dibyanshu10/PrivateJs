let d1 = document.getElementById("INR");
let d2 = document.getElementById("USD");
let t1 = document.getElementById("box1");
let t2 = document.getElementById("box2");
const b = document.getElementById("convert");

d1.addEventListener("change", () => {
  if (d1.value == "INR") {
    d2.value = "USD";
  } else if (d1.value == "USD") {
    d2.value = "INR";
  }
  console.log("call")
});

b.addEventListener("click", () => {
  if (
    d1.value != "Select" &&
    d1.value == "INR" &&
    d2.value != "Select" &&
    d2.value == "USD"
  ) {
    t2.value = t1.value / 83;
  } else if (
    d1.value != "Select" &&
    d1.value == "INR" &&
    d2.value != "Select" &&
    d2.value == "INR"
  ) {
    t2.value = t1.value;
  } else if (
    d1.value != "Select" &&
    d1.value == "USD" &&
    d2.value != "Select" &&
    d2.value == "INR"
  ) {
    t2.value = t1.value * 83;
  } else if (d1.value != "Select" || d2.value != "Select") {
    t2.value = "";
    alert("Please slect the values from dropdown");
  } else {
    t2.value = t1.value;
  }
});
