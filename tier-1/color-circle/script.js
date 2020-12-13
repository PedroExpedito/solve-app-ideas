const body = document.getElementById("body");
const initButton = document.getElementById("initButton");
const increment = document.getElementById("increment");

let startColors = {
  one: null,
  two: null,
  three: null,
}

let startColorsNumber;
let incrementNumber;
let running = false;

const startColor1 = document.getElementById("startColor1");
const startColor2 = document.getElementById("startColor2");
const startColor3 = document.getElementById("startColor3");


startColor1.onchange = function() {
  startColors.one = this.value;
  console.log(this.value);
}
startColor2.onchange = function() {
  startColors.two = this.value;
  console.log(this.value);
}
startColor3.onchange = function() {
  startColors.three = this.value;
  console.log(this.value);
}


increment.onchange = function() {
  incrementNumber = this.value;
}

body.style = "background-color: #FAFAAA";
console.log(body);

initButton.onclick = function() {
  if (running === false) {
    startColorsNumber = `${startColors.one}${startColors.two}${startColors.three}`
    running = true;
    initButton.innerHTML = "PAUSE"
    startColor1.setAttribute("readonly","");
    newBackgroundColor();
  } else {
    running = false;
    initButton.innerHTML = "START"
    startColor1.removeAttribute("readonly");
  }
}

function newBackgroundColor() {
  body.style = `background-color: #${startColorsNumber}`;

    startColorsNumber = (parseInt(startColorsNumber, 16) +
    parseInt(incrementNumber,16)).toString(16);
  console.log(startColorsNumber);
  if (running) {
    setTimeout(newBackgroundColor, 250);
  }
}

while(true) {
  newBackgroundColor();
  setTimeout(newBackgroundColor, 250);
  console.log("OI");
}
const a = "FF";

let b = parseInt(a, 16);

console.log(b);

b = b.toString(16);

console.log(b);

