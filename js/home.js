
// Cria um array com os jogos disponíveis no site
  // Aqui são só exemplos.
  const jogosDisponiveis = [
    { nome: "Super Mario World", link: "https://www.jogosfas.com/game.php?id_juego=19435&code=68v7988vvb9vvvv6c277bee9vbv2vv98", img: "../img/super-mario-world-icon.jfif" },
    { nome: "Adivinhe o Pokémon", link: "https://www.jogosfas.com/game.php?id_juego=11528&code=68v7988vvb9vvvv6c277bee9vbv2vv98", img: "../img/adivinhe-pokemon-icon.webp" },
    { nome: "Donkey Kong Arcade", link: "https://www.jogosfas.com/game.php?id_juego=20816&code=68v7988vvb9vvvv6c277bee9vbv2vv98", img: "../img/donkey-kong-country.webp" },
    { nome: "GTA 2", link: "https://www.jogosfas.com/game.php?id_juego=20740&code=68v7988vvb9vvvv6c277bee9vbv2vv98", img: "../img/gta 2.jpg" },
    { nome: "Subway Surfers", link: "https://www.jogosfas.com/game.php?id_juego=21244&code=68v7988vvb9vvvv6c277bee9vbv2vv98", img: "../img/subway-surfers.webp" },
    { nome: "CrashBandicoot KR", link: "https://www.jogosfas.com/game.php?id_juego=18298&code=68v7988vvb9vvvv6c277bee9vbv2vv98", img: "../img/crash-bandicoot-icon.jfif" },
    { nome: "Among Us Run Christmas", link: "https://www.jogosfas.com/game.php?id_juego=20033&code=68v7988vvb9vvvv6c277bee9vbv2vv98", img: "../img/among-us.jpg" },
    { nome: "Pokemon Emerald", link: "https://www.jogosfas.com/game.php?id_juego=18053&code=68v7988vvb9vvvv6c277bee9vbv2vv98", img: "../img/pk-emerald-icon.jfif" },
    { nome: "Sonic 3", link: "https://www.jogosfas.com/game.php?id_juego=18028&code=68v7988vvb9vvvv6c277bee9vbv2vv98", img: "../img/sonic3-icon.jpg" },
    { nome: "Sonic Hedgehog", link: "https://www.jogosfas.com/game.php?id_juego=19847&code=68v7988vvb9vvvv6c277bee9vbv2vv98", img: "../img/sonic-hedgehog-icon.jfif" },
    { nome: "Surfers Peru", link: "https://www.jogosfas.com/game.php?id_juego=21320&code=68v7988vvb9vvvv6c277bee9vbv2vv98", img: "../img/surfers-peru-icon.png" },
    { nome: "Vestir Garota", link: "https://www.jogosfas.com/game.php?id_juego=21230&code=68v7988vvb9vvvv6c277bee9vbv2vv98", img: "../img/vestirGarotasDeAnime-icon.webp" },
    { nome: "Sniper Shot", link: "https://html5.gamedistribution.com/25747b9934954278ba356dce7d886ab9/?gd_sdk_referrer_url=https://www.clickjogos.com.br/jogos/sniper-shot", img: "../img/sniper-shot-icon.jpg" },
    { nome: "Fireboy Watergirl", link: "https://html5.gamedistribution.com/03f124074b0049f89fdace0cacf8ead5/?gd_sdk_referrer_url=https://www.clickjogos.com.br/jogos/fireboy-and-watergirl-1-forest-temple", img: "../img/firewater-icon.png" },
];

function openGame(nameGame,linkGame) {
    localStorage.setItem("nameGame", nameGame);
    localStorage.setItem("linkGame", linkGame);
    window.open('GameTemplate.html', "_self");
}


const jogosRecomendadosElemento = document.querySelector(".games");

for (const jogo of jogosDisponiveis) {
    const a_tag = document.createElement("a");
    a_tag.className = 'game_link'
    a_tag.onclick = ()=> {
        openGame(jogo.nome, jogo.link);
     };
    jogosRecomendadosElemento.appendChild(a_tag);
    const recommended = document.createElement("div");
    recommended.className = 'recommended';
    a_tag.appendChild(recommended);
    const img = document.createElement("img");
    img.src = jogo.img;
    recommended.appendChild(img);
    const nameText = document.createElement("h3");
    nameText.className = 'game_id'
    const name = document.createTextNode(jogo.nome);
    nameText.appendChild(name);
    recommended.appendChild(nameText);
}