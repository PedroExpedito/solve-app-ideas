const buttonON = document.getElementById("buttonON");
const buttonOFF = document.getElementById("buttonOFF");
const bulbs = document.getElementsByClassName("bulb");
const speedRange = document.getElementById("speed");

let speed = 1;
let bulbsAmount = 8;

for ( let i  =0; i < bulbsAmount; i++) {
  let bulb = document.createElement("div");
  bulb.className = "bulb";
  document.getElementById("lights").appendChild(bulb);
}

buttonOFF.onclick = function () {
    for ( let i  =0; i < bulbsAmount; i++) {
      bulbs[i].style.animation = "none";
    }
}

function alternate() {
  for ( let i  =0; i < bulbsAmount; i++) {
      bulbs[i].style.animation = `bulb-pulse-2 ${speed}s linear 0s infinite alternate`;
  }
}
buttonON.onclick = function () {
  alternate();
}

speedRange.onchange = function() {
  speed = this.value;
  alternate();
}

