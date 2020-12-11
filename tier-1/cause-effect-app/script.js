let verySimple = document.getElementById("verySimple");

const button = document.getElementById("button")

button.style = `width: 0; height: 0;
  border-top: 5px solid transparent;
  border-left: 10px solid #555;
  border-bottom: 5px solid transparent;
  padding: 1px;`

button.onclick = handleClick;

const itens =  ["Abobora", "Maça", "Banana"];

function handleClick() {
  console.log("Inicio");
  const list = document.getElementById("list");
  if (!list) {
    click = true;
    button.style = `width: 0;
	height: 0;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	border-top: 10px solid #555;
  padding: 1px;`
    let ul = document.createElement("ul");
    ul.id = "list";
    verySimple.appendChild(ul);
    // console.log(verySimple);

    for (i in itens) {
      let li = document.createElement("li");
      li.innerHTML = itens[i];
      ul.appendChild(li);
    }
  } else {
    document.getElementById("list").remove();
    button.style = `width: 0; height: 0;
  border-top: 5px solid transparent;
  border-left: 10px solid #555;
  border-bottom: 5px solid transparent;
  padding: 1px;`
  }
}
