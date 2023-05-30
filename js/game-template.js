
let nameGame = localStorage.getItem("nameGame");
let iframe =   localStorage.getItem("linkGame");

const nameGameElement = document.querySelector(".title-game");
const iframeElement = document.querySelector(".iframe-game");
document.title = nameGame


nameGameElement.innerHTML = nameGame;
iframeElement.src = iframe;
document.title = nameGame;