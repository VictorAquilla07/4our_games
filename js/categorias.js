
const jogosDisponiveis = [
    {
        nome: "Super Mario World",
        link: "https://www.jogosfas.com/game.php?id_juego=19435&code=68v7988vvb9vvvv6c277bee9vbv2vv98",
        img: "../img/super-mario-world-icon.jfif",
        categoria: ".classico"
    },
    {
        nome: "Adivinhe o Pokémon",
        link: "https://www.jogosfas.com/game.php?id_juego=11528&code=68v7988vvb9vvvv6c277bee9vbv2vv98",
        img: "../img/adivinhe-pokemon-icon.webp",
        categoria: ".raciocinio"
    },
    {
        nome: "Donkey Kong Arcade",
        link: "https://www.jogosfas.com/game.php?id_juego=20816&code=68v7988vvb9vvvv6c277bee9vbv2vv98",
        img: "../img/donkey-kong-country.webp",
        categoria: ".classico"
    },
    {
        nome: "GTA 2",
        link: "https://www.jogosfas.com/game.php?id_juego=20740&code=68v7988vvb9vvvv6c277bee9vbv2vv98",
        img: "../img/gta 2.jpg",
        categoria: ".tiro"
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
        categoria: ".raciocinio"
    },
    {
        nome: "Pokemon Emerald",
        link: "https://www.jogosfas.com/game.php?id_juego=18053&code=68v7988vvb9vvvv6c277bee9vbv2vv98",
        img: "../img/pk-emerald-icon.jfif",
        categoria: ".classico"
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
        categoria: ".tiro"
    },
    {
        nome: "Fireboy Watergirl",
        link: "https://html5.gamedistribution.com/03f124074b0049f89fdace0cacf8ead5/?gd_sdk_referrer_url=https://www.clickjogos.com.br/jogos/fireboy-and-watergirl-1-forest-temple",
        img: "../img/firewater-icon.png",
        categoria: ".classico"
    },
    {
        nome: "Animation vs Minecraft",
        link: "https://y8.com/embed/animation_vs_minecraft",
        img: "../img/Animation_vs_Minecraft.png",
        categoria: ".aventura"
    },
    {
        nome: "Wild Dino Hunt",
        link: "https://y8.com/embed/wild_dino_hunt",
        img: "../img/dino-icon.gif",
        categoria: ".tiro"
    },
    {
        nome: "Kiddo Denim School",
        link: "https://y8.com/embed/kiddo_denim_school",
        img: "https://img.y8.com/cloud/v2-y8-thumbs-small-thumbnails-001/163031/small.gif",
        categoria: ".aventura",
    },
    {
        nome: "Baby Cathy",
        link: "https://y8.com/embed/baby_cathy_ep31_sibling_care",
        img: "https://img.y8.com/cloud/v2-y8-thumbs-small-thumbnails-001/162535/small.gif",
        categoria: ".meninas",
    },
    {
        nome: "Roxie Kitchen: Apple Pie ",
        link: "https://y8.com/embed/roxie_kitchen_apple_pie",
        img: "../img/roxie-icon.gif",
        categoria: ".meninas",
    },
    {
        nome: "The Sorcerer",
        link: "https://y8.com/embed/the_sorcerer",
        img: "../img/the-sorcerer-icon.png",
        categoria: ".aventura",
    },
    {
        nome: "Super Mario 64",
        link: "https://www.jogosfas.com/game.php?id_juego=20036&code=v187v8919269vvve4b1v6c4vv18vdvc4",
        img: "../img/super-mario-64.png",
        categoria: ".classico",
    },
    {
        nome: "Super Mario Branco",
        link: "https://www.jogosfas.com/game.php?id_juego=19834&code=vcvvv194ceve6vcvbvbv9v84811427v1",
        img: "../img/sonic-branco-icon.jpg",
        categoria: ".aventura",
    },
    {
        nome: "Friday Night Funkin",
        link: "https://www.jogosfas.com/game.php?id_juego=20166&code=vcvvv194ceve6vcvbvbv9v84811427v1",
        img: "../img/funkin-icon.jpg",
        categoria: ".raciocinio",
    },
    {
        nome: "Street Fighter III",
        link: "https://www.jogosfas.com/game.php?id_juego=17150&code=vcvvv194ceve6vcvbvbv9v84811427v1",
        img: "../img/street-fighter-III-icon.jpg",
        categoria: ".luta",
    },
    {
        nome: "Super-heróis da Marvel",
        link: "https://www.jogosfas.com/game.php?id_juego=19612&code=vcvvv194ceve6vcvbvbv9v84811427v1",
        img: "../img/super-heroi-icon.jpg",
        categoria: ".luta",
    },
    {
        nome: "Tekken 2",
        link: "https://www.jogosfas.com/game.php?id_juego=19529&code=vcvvv194ceve6vcvbvbv9v84811427v1",
        img: "../img/tekken-2-icon.jpg",
        categoria: ".luta",
    },
    {
        nome: "WWF No Mercy",
        link: "https://www.jogosfas.com/game.php?id_juego=20101&code=vcvvv194ceve6vcvbvbv9v84811427v1",
        img: "../img/wwf-no-mercy-icon.jpg",
        categoria: ".luta",
    },
    {
        nome: "Mortal Kombat 4",
        link: "https://www.jogosfas.com/game.php?id_juego=18269&code=vcvvv194ceve6vcvbvbv9v84811427v1",
        img: "../img/mortal-kombat-4-icon.jpg",
        categoria: ".luta",
    },
    {
        nome: "Mortal Kombat Unlimited",
        link: "https://www.jogosfas.com/game.php?id_juego=18557&code=vcvvv194ceve6vcvbvbv9v84811427v1",
        img: "../img/mortal-kombat-unlimited-icon.jpg",
        categoria: ".luta",
    },
    {
        nome: "Trilogia Ultimate Mortal Kombat",
        link: "https://www.jogosfas.com/game.php?id_juego=19828&code=vcvvv194ceve6vcvbvbv9v84811427v1",
        img: "../img/trilogia-ultimate-icon.jpg",
        categoria: ".luta",
    },
    {
        nome: "Dragon Ball Warriors",
        link: "https://www.jogosfas.com/game.php?id_juego=18406&code=vcvvv194ceve6vcvbvbv9v84811427v1",
        img: "../img/dragon-ball-warrios-icon.jpg",
        categoria: ".luta",
    },
    {
        nome: "Jogo de Boxe",
        link: "https://www.jogosfas.com/game.php?id_juego=10232&code=vcvvv194ceve6vcvbvbv9v84811427v1",
        img: "../img/jogo-boxo-icon.jpg",
        categoria: ".luta",
    },
    {
        nome: "Smash Remix 1.2.0",
        link: "https://www.jogosfas.com/game.php?id_juego=21141&code=vcvvv194ceve6vcvbvbv9v84811427v1",
        img: "../img/smash-remix-icon.jpg",
        categoria: ".raciocinio",
    },
    {
        nome: "Geometry Dash Lite",
        link: "https://www.jogosfas.com/game.php?id_juego=10505&code=vcvvv194ceve6vcvbvbv9v84811427v1",
        img: "../img/geometry-dash-lite-icon.jpg",
        categoria: ".raciocinio",
    },
    {
        nome: "Aros de Truque",
        link: "https://www.jogosfas.com/game.php?id_juego=13942&code=vcvvv194ceve6vcvbvbv9v84811427v1",
        img: "../img/aros-de-truque-icon.jpg",
        categoria: ".esportes",
    },
    {
        nome: "Fun Ear Doctor",
        link: "https://y8.com/embed/fun_ear_doctor",
        img: "../img/fun-ear-doctor-icon.gif",
        categoria: ".meninas",
    },
    {
        nome: "Ninja Clash Heroes",
        link: "https://pt.y8.com/games/ninja_clash_heroes",
        img: "../img/ninja-clash-heroes-icon.gif",
        categoria: ".aventura",
    },
    {
        nome: "Freefall Tournament",
        link: "https://y8.com/embed/freefall_tournament",
        img: "../img/freefall-tournament-icon.gif",
        categoria: ".esportes",
    },
    {
        nome: "Sonic: Classic Heroes",
        link: "https://www.jogosfas.com/game.php?id_juego=19664&code=19496bv1vb4ve9vv92evb2cv29981c86",
        img: "../img/sonic-classic-heroes-icon.jpg",
        categoria: ".aventura",
    },
    {
        nome: "Cruz Sônica",
        link: "https://www.jogosfas.com/game.php?id_juego=12538&code=19496bv1vb4ve9vv92evb2cv29981c86",
        img: "../img/cross_sonic_race-icon.jpg",
        categoria: ".esportes",
    },
    {
        nome: "Bater Bandicoot",
        link: "https://www.jogosfas.com/game.php?id_juego=18305&code=19496bv1vb4ve9vv92evb2cv29981c86",
        img: "../img/Crash-THA-Capa-icon.png",
        categoria: ".aventura",
    },
    {
        nome: "Super smash bros",
        link: "https://www.jogosfas.com/game.php?id_juego=18425&code=19496bv1vb4ve9vv92evb2cv29981c86",
        img: "../img/super-smash-bros-icon.jpeg",
        categoria: ".esportes",
    },
    {
        nome: "Smash remix",
        link: "https://www.jogosfas.com/game.php?id_juego=20102&code=19496bv1vb4ve9vv92evb2cv29981c86",
        img: "../img/smash-remix2-icon.jpg",
        categoria: ".esportes",
    },
    {
        nome: "Sonic Pinball Party",
        link: "https://www.jogosfas.com/game.php?id_juego=20824&code=19496bv1vb4ve9vv92evb2cv29981c86",
        img: "../img/sonic-pinball-party-icon.jpg",
        categoria: ".esportes",
    },
    {
        nome: "Russian Car Driver HD",
        link: "https://pt.y8.com/games/russian_car_driver_hd",
        img: "../img/car-driver-icon.gif",
        categoria: ".esportes",
    },
    {
        nome: "Super Brawl Showdown",
        link: "https://pt.y8.com/games/super_brawl_showdown_",
        img: "../img/super-brawl-icon.gif",
        categoria: ".esportes",
    },
    {
        nome: "Mini Samurai: Kurofune",
        link: "https://pt.y8.com/games/mini_samurai_kurofune",
        img: "../img/mini-samurai-icon.gif",
        categoria: ".aventura",
    },
    {
        nome: "Kebab Fighter",
        link: "https://pt.y8.com/games/kebab_fighter",
        img: "../img/kebab-fighter-icon.gif",
        categoria: ".luta",
    },
    {
        nome: "Pintar Pokémon Eevee",
        link: "https://www.jogosfas.com/game.php?id_juego=11348&code=19496bv1vb4ve9vv92evb2cv29981c86",
        img: "../img/pintar-pokemon-evee-icon.jpeg",
        categoria: ".meninas",
    },
    {
        nome: "Marvel Super Heroes vs Street Fighter",
        link: "https://www.jogosfas.com/game.php?id_juego=19808&code=19496bv1vb4ve9vv92evb2cv29981c86",
        img: "../img/marvel-vs-street-icon.jpg",
        categoria: ".luta",
    },
    {
        nome: "Tartarugas Ninjas",
        link: "https://www.jogosfas.com/game.php?id_juego=20950&code=19496bv1vb4ve9vv92evb2cv29981c86",
        img: "../img/tartarugas-ninjas-icon.jpg",
        categoria: ".aventura",
    },
    {
        nome: "Entre nós: esconde-esconde",
        link: "https://www.jogosfas.com/game.php?id_juego=19982&code=v6v2vbvevdvv8bc62e766vvcd4evvvv8",
        img: "../img/esconde-esconde-icon.jpg",
        categoria: ".raciocinio",
    },
    {
        nome: "Straw Hat Samurai",
        link: "https://pt.y8.com/games/straw_hat_samurai",
        img: "../img/straw-samurai-icon.jpg",
        categoria: ".luta",
    },
    {
        nome: "Medieval Defense Z",
        link: "https://pt.y8.com/games/medieval_defense_z",
        img: "../img/medieval-defense-z-icon.gif",
        categoria: ".raciocinio",
    },
    {
        nome: "Gunspin",
        link: "https://pt.y8.com/games/gunspin",
        img: "../img/gunspin-icon.gif",
        categoria: ".tiro",
    },
    {
        nome: "Drift 3 io",
        link: "https://pt.y8.com/games/drift_3_io",
        img: "../img/drift-3-io-icon.gif",
        categoria: ".esportes",
    },
    {
        nome: "Deepest Sword",
        link: "https://pt.y8.com/games/deepest_sword",
        img: "../img/deepest-sword-icon.gif",
        categoria: ".aventura",
    },
    {
        nome: "Hexblade",
        link: "https://pt.y8.com/games/hexblade",
        img: "../img/hexblade-icon.gif",
        categoria: ".luta",
    },
    {
        nome: "Dreamtime Combat",
        link: "https://pt.y8.com/games/dreamtime_combat",
        img: "../img/dreamtime-combat-icon.gif",
        categoria: ".luta",
    },
    {
        nome: "Self",
        link: "https://pt.y8.com/games/self",
        img: "../img/self-icon.gif",
        categoria: ".aventura",
    },
    {
        nome: "Mole",
        link: "https://pt.y8.com/games/mole",
        img: "../img/mole-icon.gif",
        categoria: ".aventura",
    },
    {
        nome: "ShapeMaze",
        link: "https://pt.y8.com/games/shapemaze",
        img: "../img/shapemaze-icon.gif",
        categoria: ".esportes",
    },
    {
        nome: "Minima Speedrun Platformere",
        link: "https://pt.y8.com/games/minima_speedrun_platformer",
        img: "../img/speedrun-icon.gif",
        categoria: ".esportes",
    },
    {
        nome: "Snow Rider 3D",
        link: "https://pt.y8.com/games/snow_rider_3d",
        img: "../img/snow-rider-icon.gif",
        categoria: ".esportes",
    },
    {
        nome: "Slope",
        link: "https://y8.com/embed/slope",
        img: "../img/slope-icon.gif",
        categoria: ".esportes",
    },
    {
        nome: "Death Run 3D",
        link: "https://y8.com/embed/death_run_3d",
        img: "../img/death-run-icon.gif",
        categoria: ".esportes",
    },
    {
        nome: "Interstellar Run",
        link: "https://pt.y8.com/games/interstellar_run",
        img: "../img/interstellar-icon.gif",
        categoria: ".esportes",
    },
    {
        nome: "Moto X3m",
        link: "https://y8.com/embed/moto_x3m_2",
        img: "../img/moto-x3m-icon.gif",
        categoria: ".esportes",
    },
];

function openGame(nameGame, linkGame) {
    localStorage.setItem("nameGame", nameGame);
    localStorage.setItem("linkGame", linkGame);
    window.open('GameTemplate.html', "_self");
}




for (const jogo of jogosDisponiveis) {
    const jogosElemento = document.querySelector(jogo.categoria);
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