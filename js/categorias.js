
const jogosDisponiveis = [
    {
        nome: "Super Mario World",
        link: "https://www.jogosfas.com/game.php?id_juego=19435&code=68v7988vvb9vvvv6c277bee9vbv2vv98",
        img: "../img/super-mario-world-icon.jfif",
        categoria: ".aventura"
    },
    {
        nome: "Adivinhe o Pokémon",
        link: "https://www.jogosfas.com/game.php?id_juego=11528&code=68v7988vvb9vvvv6c277bee9vbv2vv98",
        img: "../img/adivinhe-pokemon-icon.webp",
        categoria: ".aventura"
    },
    {
        nome: "Donkey Kong Arcade",
        link: "https://www.jogosfas.com/game.php?id_juego=20816&code=68v7988vvb9vvvv6c277bee9vbv2vv98",
        img: "../img/donkey-kong-country.webp",
        categoria: ".acao"
    },
    {
        nome: "GTA 2",
        link: "https://www.jogosfas.com/game.php?id_juego=20740&code=68v7988vvb9vvvv6c277bee9vbv2vv98",
        img: "../img/gta 2.jpg",
        categoria: ".acao"
    },
    {
        nome: "Subway Surfers",
        link: "https://www.jogosfas.com/game.php?id_juego=21244&code=68v7988vvb9vvvv6c277bee9vbv2vv98",
        img: "../img/subway-surfers.webp",
        categoria: ".aventura"
    },
    {
        nome: "CrashBandicoot KR",
        link: "https://www.jogosfas.com/game.php?id_juego=18298&code=68v7988vvb9vvvv6c277bee9vbv2vv98",
        img: "../img/crash-bandicoot-icon.jfif",
        categoria: ".aventura"
    },
    {
        nome: "Among Us RC",
        link: "https://www.jogosfas.com/game.php?id_juego=20033&code=68v7988vvb9vvvv6c277bee9vbv2vv98",
        img: "../img/among-us.jpg",
        categoria: ".acao"
    },
    {
        nome: "Pokemon Emerald",
        link: "https://www.jogosfas.com/game.php?id_juego=18053&code=68v7988vvb9vvvv6c277bee9vbv2vv98",
        img: "../img/pk-emerald-icon.jfif",
        categoria: ".aventura"
    },
    {
        nome: "Sonic 3",
        link: "https://www.jogosfas.com/game.php?id_juego=18028&code=68v7988vvb9vvvv6c277bee9vbv2vv98",
        img: "../img/sonic3-icon.jpg",
        categoria: ".aventura"
    },
    {
        nome: "Sonic Hedgehog",
        link: "https://www.jogosfas.com/game.php?id_juego=19847&code=68v7988vvb9vvvv6c277bee9vbv2vv98",
        img: "../img/sonic-hedgehog-icon.jfif",
        categoria: ".aventura"
    },
    {
        nome: "Surfers Peru",
        link: "https://www.jogosfas.com/game.php?id_juego=21320&code=68v7988vvb9vvvv6c277bee9vbv2vv98",
        img: "../img/surfers-peru-icon.png",
        categoria: ".aventura"
    },
    {
        nome: "Vestir Garota",
        link: "https://www.jogosfas.com/game.php?id_juego=21230&code=68v7988vvb9vvvv6c277bee9vbv2vv98",
        img: "../img/vestirGarotasDeAnime-icon.webp",
        categoria: ".meninas"
    },
    {
        nome: "Sniper Shot",
        link: "https://html5.gamedistribution.com/25747b9934954278ba356dce7d886ab9/?gd_sdk_referrer_url=https://www.clickjogos.com.br/jogos/sniper-shot",
        img: "../img/sniper-shot-icon.jpg",
        categoria: ".acao"
    },
    {
        nome: "Fireboy Watergirl",
        link: "https://html5.gamedistribution.com/03f124074b0049f89fdace0cacf8ead5/?gd_sdk_referrer_url=https://www.clickjogos.com.br/jogos/fireboy-and-watergirl-1-forest-temple",
        img: "../img/firewater-icon.png",
        categoria: ".aventura"
    },
    {
        nome: "Animation vs Minecraft",
        link: "https://y8.com/embed/animation_vs_minecraft",
        img: "../img/Animation_vs_Minecraft.png",
        categoria: ".acao"
    },
    {
        nome: "Wild Dino Hunt",
        link: "https://y8.com/embed/wild_dino_hunt",
        img: "../img/dino-icon.gif",
        categoria: ".acao"
    },
];

function openGame(nameGame, linkGame) {
    localStorage.setItem("nameGame", nameGame);
    localStorage.setItem("linkGame", linkGame);
    window.open('GameTemplate.html', "_self");
}




for (const jogo of jogosDisponiveis) {
    const jogosElemento = document.querySelector(jogo.categoria);
    console.log(jogosElemento);
    const a_tag = document.createElement("a");
    a_tag.className = 'game_link'
    a_tag.className = 'item'
    a_tag.onclick = () => {
        openGame(jogo.nome, jogo.link);
    };
    jogosElemento.appendChild(a_tag);
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

/*function MouseWheelHandler(e, element) {
    var delta = 0;
    if (typeof e === 'number') {
        delta = e;
    } else {
        if (e.deltaX !== 0) {
            delta = e.deltaX;
        } else {
            delta = e.deltaY;
        }
        e.preventDefault();
    }

    element.scrollLeft -= (delta);

}

window.onload = function () {
    var carousel = {};
    carousel.e = document.getElementById('carousel');
    carousel.items = document.getElementById('carousel-items');
    carousel.leftScroll = document.getElementById('left-scroll-button');
    carousel.rightScroll = document.getElementById('right-scroll-button');

    carousel.items.addEventListener("mousewheel", handleMouse, false);
    carousel.items.addEventListener("scroll", scrollEvent);
    carousel.leftScroll.addEventListener("click", leftScrollClick);
    carousel.rightScroll.addEventListener("click", rightScrollClick);

    setLeftScrollOpacity();
    setRightScrollOpacity();

    function handleMouse(e) {
        MouseWheelHandler(e, carousel.items);
    }

    function leftScrollClick() {
        MouseWheelHandler(1200, carousel.items);
    }

    function rightScrollClick() {
        MouseWheelHandler(-1200, carousel.items);
    }

    function scrollEvent(e) {
        setLeftScrollOpacity();
        setRightScrollOpacity();
    }

    function setLeftScrollOpacity() {
        if (isScrolledAllLeft()) {
            carousel.leftScroll.style.opacity = 0;
        } else {
            carousel.leftScroll.style.opacity = 1;
        }
    }

    function isScrolledAllLeft() {
        if (carousel.items.scrollLeft === 0) {
            return true;
        } else {
            return false;
        }
    }

    function isScrolledAllRight() {
        if (carousel.items.scrollWidth > carousel.items.offsetWidth) {
            if (carousel.items.scrollLeft + carousel.items.offsetWidth === carousel.items.scrollWidth) {
                return true;
            }
        } else {
            return true;
        }

        return false;
    }

    function setRightScrollOpacity() {
        if (isScrolledAllRight()) {
            carousel.rightScroll.style.opacity = 0;
        } else {
            carousel.rightScroll.style.opacity = 1;
        }
    }
}*/