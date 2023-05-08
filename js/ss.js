
// Cria um array com os jogos disponíveis no site
  // Aqui são só exemplos.
const jogosDisponiveis = [
    { nome: "Super Mario World", link: "SuperMarioWorld.html", img: "../img/super-mario-world-icon.jfif" },
    { nome: "Call of Duty", link: "SuperMarioWorld.html", img: "../img/super-mario-world-icon.jfif" },
    { nome: "Minecraft", link: "SuperMarioWorld.html", img: "../img/super-mario-world-icon.jfif" },
    { nome: "FIFA 22", link: "SuperMarioWorld.html", img: "../img/super-mario-world-icon.jfif" },
    { nome: "Assassin's Creed Valhalla", link: "SuperMarioWorld.html", img: "../img/super-mario-world-icon.jfif" },
    { nome: "Among Us", link: "SuperMarioWorld.html", img: "../img/super-mario-world-icon.jfif" },
    { nome: "Sonic3", link: "SuperMarioWorld.html", img: "../img/super-mario-world-icon.jfif" },
    { nome: "Tetris", link: "SuperMarioWorld.html", img: "../img/super-mario-world-icon.jfif" },
    { nome: "GTA2", link: "SuperMarioWorld.html", img: "../img/super-mario-world-icon.jfif" },
    { nome: "PokemonEmerald", link: "SuperMarioWorld.html", img: "../img/super-mario-world-icon.jfif" }
];

// Define o número máximo de jogos recomendados
const maxJogosRecomendados = 8;

// Cria uma função para selecionar jogos aleatórios sem repetições
function selecionarJogosAleatorios() {
    // Cria um objeto para armazenar os jogos já selecionados
    const jogosSelecionadosObj = {};

    // Cria um array para armazenar os jogos selecionados
    const jogosSelecionados = [];

    // Enquanto não atingir o número máximo de jogos recomendados
    while (jogosSelecionados.length < maxJogosRecomendados) {
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
const jogosRecomendadosElemento = document.querySelector(".other_games");

for (const jogo of jogosRecomendados) {
    console.log(jogo);
    const a_tag = document.createElement("a");
    a_tag.href = jogo.link;
    jogosRecomendadosElemento.appendChild(a_tag);
    const recommended = document.createElement("div");
    recommended.className = 'recommended';
    a_tag.appendChild(recommended);
    const img = document.createElement("img");
    img.src = jogo.img;
    recommended.appendChild(img);
    const nameText = document.createElement("h3");
    const name = document.createTextNode(jogo.nome);
    nameText.appendChild(name);
    recommended.appendChild(nameText);
}