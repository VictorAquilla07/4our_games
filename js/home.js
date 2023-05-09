
// Cria um array com os jogos disponíveis no site
  // Aqui são só exemplos.
  const jogosDisponiveis = [
    { nome: "Super Mario World", link: "./games/SuperMarioWorld.html", img: "../img/super-mario-world-icon.jfif" },
    { nome: "Adivinhe o Pokémon", link: "./games/AdivinheOPokemon.html", img: "../img/adivinhe-pokemon-icon.webp" },
    { nome: "Donkey Kong Arcade", link: "./games/DonkeyKongArcade.html", img: "../img/donkey-kong-country.webp" },
    { nome: "GTA 2", link: "./games/GTA2.html", img: "../img/gta 2.jpg" },
    { nome: "Subway Surfers", link: "./games/SubwaySurfers.html", img: "../img/subway-surfers.webp" },
    { nome: "CrashBandicoot KR", link: "./games/CrashBandicootKartRacing.html", img: "../img/crash-bandicoot-icon.jfif" },
    { nome: "Among Us Run Christmas", link: "./games/AmongUsRunChristmas.html", img: "../img/among-us.jpg" },
    { nome: "Pokemon Emerald", link: "./games/pokemonEmerald.html", img: "../img/pk-emerald-icon.jfif" },
    { nome: "Sonic 3", link: "./games/Sonic3.html", img: "../img/sonic3-icon.jpg" },
    { nome: "Sonic Hedgehog", link: "./games/SonicHedgehog.html", img: "../img/sonic-hedgehog-icon.jfif" },
    { nome: "Surfers Peru", link: "./games/SurfersPeru.html", img: "../img/surfers-peru-icon.png" },
    { nome: "Vestir Garota", link: "./games/VestirGarotaDeAnime.html", img: "../img/vestirGarotasDeAnime-icon.webp" },
    { nome: "Sniper Shot", link: "./games/SniperShot.html", img: "../img/sniper-shot-icon.jpg" },
    { nome: "Fireboy Watergirl", link: "./games/FireboyWatergirl.html", img: "../img/firewater-icon.png" },
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

// Chama a função de seleção de jogos aleatórios e exibe os resultados na página
const jogosRecomendados = selecionarJogosAleatorios();
const jogosRecomendadosElemento = document.querySelector(".games");

for (const jogo of jogosDisponiveis) {
    const a_tag = document.createElement("a");
    a_tag.href = jogo.link;
    a_tag.className = 'game_link'
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