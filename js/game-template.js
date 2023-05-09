
let nameGame = localStorage.getItem("nameGame");
let iframe =   localStorage.getItem("linkGame");
//'https://www.jogosfas.com/game.php?id_juego=20816&code=68v7988vvb9vvvv6c277bee9vbv2vv98' DokeyKong;

const nameGameElement = document.querySelector(".title-game");
const iframeElement = document.querySelector(".iframe-game");
document.title = nameGame


nameGameElement.innerHTML = nameGame;
iframeElement.src = iframe;
document.title = nameGame;