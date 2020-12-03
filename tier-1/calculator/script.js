const display = document.getElementById("display");

const key_1 = document.getElementById("nu_1")
const key_2 = document.getElementById("nu_2")
const key_3 = document.getElementById("nu_3")
const key_4 = document.getElementById("nu_4")
const key_5 = document.getElementById("nu_5")
const key_6 = document.getElementById("nu_6")
const key_7 = document.getElementById("nu_7")
const key_8 = document.getElementById("nu_8")
const key_9 = document.getElementById("nu_9")

let value = [];

key_1.onclick = function() {
  value.push(1);
  render();
}

function render() {
  display.value = value.join("");
}


