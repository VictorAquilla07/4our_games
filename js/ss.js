// Cria um array com os jogos disponíveis no site
// Aqui são só exemplos.
const jogosDisponiveis = [
    { nome: "Super Mario Bros"},
    { nome: "Call of Duty"},
    { nome: "Minecraft"},
    { nome: "FIFA 22"},
    { nome: "Assassin's Creed Valhalla"},
    { nome: "Among Us"},
    { nome: "Sonic3"},
    { nome: "Tetris"},
    { nome: "GTA2"},
    { nome: "PokemonEmerald"}
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
  const jogosRecomendadosElemento = document.getElementById("jogos-recomendados");
  for (const jogo of jogosRecomendados) {
    const jogoElemento = document.createElement("div");
    jogoElemento.textContent = jogo.nome;
    jogosRecomendadosElemento.appendChild(jogoElemento);
  }