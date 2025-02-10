const body = document.getElementsByTagName("body")[0];

function setColor(name) {
  body.style.background = "none";
  body.style.backgroundColor = name;
}

function randColor() {
  body.style.backgroundColor = "none";
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  body.style.background = `linear-gradient(to bottom left, rgb(${red}, ${green}, ${blue}), rgb(${green}, ${blue}, ${red}))`;
}
