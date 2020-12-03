// data
let inputElement = document.getElementById("input");
let result = document.getElementById("result");

let inputValue;
let afterInputValue;
// ligação
input.onchange = handleInputChange;

// functions
function handleInputChange(event) {
  inputValue = event.target.value
  const re = /\b[01]+\b/;
  console.log(re.test(inputValue));

  if(!(re.test(inputValue))) {
    alert("Dijite apenas 0 e 1");
    if(afterInputValue) {
      input.value = afterInputValue;
    }
  } else {
    afterInputValue = inputValue;
    result.innerHTML = `<strong>Resultado:</strong> ${parseInt(inputValue,2)}`;
  }
}
