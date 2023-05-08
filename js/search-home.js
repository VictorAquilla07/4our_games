function search() {
    let input = document.getElementById('txtBusca').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('game-id');

    let games = document.getElementsByClassName('game_link');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            games[i].style.display="none";
        }
        else {
            games[i].style.display="flex";                 
        }
    }
}