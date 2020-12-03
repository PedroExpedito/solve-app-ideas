let box = document.getElementById('box');
let generator = document.createElement('div');

const toClipBOard = document.getElementById('toClipBOard');

const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const h4 = document.getElementById('h4');

const v1 = document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');

const result = document.getElementById('result');

let values = {
  h1: 20,
  h2: 20,
  h3: 20,
  h4: 20,
  v1: 20,
  v2: 20,
  v3: 20,
  v4: 20,
}

toClipBOard.onclick = function() {
  navigator.clipboard.writeText(`${values.h1}% ${values.h2}%
    ${values.h3}% ${values.h4}% / ${values.v1}% ${values.v2}%
    ${values.v3}% ${values.v4}%`).then(function() {
      toClipBOard.innerHTML = "copied";
}, function(err) {
  console.error('Async: Could not copy text: ', err);
});

}
h1.oninput = function() {
  values.h1 = this.value;
  renderGenerator();
}
h2.oninput = function() {
  values.h2 = this.value;
  renderGenerator();
}
h3.oninput = function() {
  values.h3 = this.value;
  renderGenerator();
}
h4.oninput = function() {
  values.h4 = this.value;
  renderGenerator();
}

v1.oninput = function() {
  values.v1 = this.value;
  renderGenerator();
}
v2.oninput = function() {
  values.v2 = this.value;
  renderGenerator();
}
v3.oninput = function() {
  values.v3 = this.value;
  renderGenerator();
}
v4.oninput = function() {
  values.v4 = this.value;
  renderGenerator();
}

function renderGenerator() {
  let borderRadius = `border-radius: ${values.h1}% ${values.h2}%
    ${values.h3}% ${values.h4}% / ${values.v1}% ${values.v2}%
    ${values.v3}% ${values.v4}%`
  let style =
    `width: 300px; height: 300px; background-color: red; ${borderRadius};`

  generator.
  setAttribute('style', style);
  box.appendChild(generator);

  result.innerHTML = `${values.h1}% ${values.h2}%
    ${values.h3}% ${values.h4}% / ${values.v1}% ${values.v2}%
    ${values.v3}% ${values.v4}%`
}

renderGenerator();
