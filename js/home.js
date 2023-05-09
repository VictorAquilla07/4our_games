
// Cria um array com os jogos disponíveis no site
  // Aqui são só exemplos.
  const jogosDisponiveis = [
    { nome: "Super Mario World", link: "GameTemplate.html", img: "../img/super-mario-world-icon.jfif" },
    { nome: "Adivinhe o Pokémon", link: "GameTemplate.html", img: "../img/adivinhe-pokemon-icon.webp" },
    { nome: "Donkey Kong Arcade", link: "GameTemplate.html", img: "../img/donkey-kong-country.webp" },
    { nome: "GTA 2", link: "GameTemplate.html", img: "../img/gta 2.jpg" },
    { nome: "Subway Surfers", link: "GameTemplate.html", img: "../img/subway-surfers.webp" },
    { nome: "CrashBandicoot KR", link: "GameTemplate.html", img: "../img/crash-bandicoot-icon.jfif" },
    { nome: "Among Us Run Christmas", link: "GameTemplate.html", img: "../img/among-us.jpg" },
    { nome: "Pokemon Emerald", link: "GameTemplate.html", img: "../img/pk-emerald-icon.jfif" },
    { nome: "Sonic 3", link: "GameTemplate.html", img: "../img/sonic3-icon.jpg" },
    { nome: "Sonic Hedgehog", link: "GameTemplate.html", img: "../img/sonic-hedgehog-icon.jfif" },
    { nome: "Surfers Peru", link: "GameTemplate.html", img: "../img/surfers-peru-icon.png" },
    { nome: "Vestir Garota", link: "GameTemplate.html", img: "../img/vestirGarotasDeAnime-icon.webp" },
    { nome: "Sniper Shot", link: "GameTemplate.html", img: "../img/sniper-shot-icon.jpg" },
    { nome: "Fireboy Watergirl", link: "GameTemplate.html", img: "../img/firewater-icon.png" },
];

function selecionarJogosAleatorios() {
    // Cria um objeto para armazenar os jogos já selecionados
    const jogosSelecionadosObj = {};

    // Cria um array para armazenar os jogos selecionados
    const jogosSelecionados = [];

    // Enquanto não atingir o número máximo de jogos recomendados
    while (jogosSelecionados.length < jogosDisponiveis.length) {
        // Seleciona um jogo aleatório
        const jogoAleatorio = jogosDisponiveis[Math.floor(Math.random() * jogosDisponiveis.length)];

        // Se o jogo ainda não foi selecionado, adiciona o jogo selecionado
        if (!jogosSelecionadosObj[jogoAleatorio.nome]) {
            jogosSelecionadosObj[jogoAleatorio.nome] = true;
            jogosSelecionados.push(jogoAleatorio);
        }

    }

    // Retorna os jogos selecionados
    return jogosSelecionados;
}

function openGame(nameGame,linkGame) {
    localStorage.setItem("nameGame", nameGame);
    localStorage.setItem("linkGame", linkGame);
    window.open('GameTemplate.html', "_self");
}

// Chama a função de seleção de jogos aleatórios e exibe os resultados na página
const jogosRecomendados = selecionarJogosAleatorios();
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