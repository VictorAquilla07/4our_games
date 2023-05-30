
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
    { nome: "Animation vs Minecraft", link: "https://y8.com/embed/animation_vs_minecraft", img: "../img/Animation_vs_Minecraft.png" },
    { nome: "Wild Dino Hunt", link: "https://y8.com/embed/wild_dino_hunt", img: "../img/dino-icon.gif" },
    { nome: "Kiddo Denim School", link: "https://y8.com/embed/kiddo_denim_school", img: "https://img.y8.com/cloud/v2-y8-thumbs-small-thumbnails-001/163031/small.gif" },
    { nome: "Baby Cathy", link: "https://y8.com/embed/baby_cathy_ep31_sibling_care", img: "https://img.y8.com/cloud/v2-y8-thumbs-small-thumbnails-001/162535/small.gif" },
    { nome: "Roxie Kitchen: Apple Pie ", link: "https://y8.com/embed/roxie_kitchen_apple_pie", img: "../img/roxie-icon.gif" },
    { nome: "The Sorcerer", link: "https://y8.com/embed/the_sorcerer", img: "../img/the-sorcerer-icon.png" },
    { nome: "Super Mario 64", link: "https://www.jogosfas.com/game.php?id_juego=20036&code=v187v8919269vvve4b1v6c4vv18vdvc4", img: "../img/super-mario-64.png" },
    { nome: "Super Mario Branco", link: "https://www.jogosfas.com/game.php?id_juego=19834&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/sonic-branco-icon.jpg" },
    { nome: "Friday Night Funkin", link: "https://www.jogosfas.com/game.php?id_juego=20166&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/funkin-icon.jpg" },
    { nome: "Street Fighter III", link: "https://www.jogosfas.com/game.php?id_juego=17150&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/street-fighter-III-icon.jpg" },
    { nome: "Super-heróis da Marvel", link: "https://www.jogosfas.com/game.php?id_juego=19612&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/super-heroi-icon.jpg" },
    { nome: "Tekken 2", link: "https://www.jogosfas.com/game.php?id_juego=19529&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/tekken-2-icon.jpg" },
    { nome: "WWF No Mercy", link: "https://www.jogosfas.com/game.php?id_juego=20101&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/wwf-no-mercy-icon.jpg" },
    { nome: "Mortal Kombat 4", link: "https://www.jogosfas.com/game.php?id_juego=18269&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/mortal-kombat-4-icon.jpg" },
    { nome: "Mortal Kombat Unlimited", link: "https://www.jogosfas.com/game.php?id_juego=18557&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/mortal-kombat-unlimited-icon.jpg" },
    { nome: "Trilogia Ultimate Mortal Kombat", link: "https://www.jogosfas.com/game.php?id_juego=19828&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/trilogia-ultimate-icon.jpg" },
    { nome: "Dragon Ball Warriors", link: "https://www.jogosfas.com/game.php?id_juego=18406&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/dragon-ball-warrios-icon.jpg" },
    { nome: "Jogo de Boxe", link: "https://www.jogosfas.com/game.php?id_juego=10232&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/jogo-boxo-icon.jpg" },
    { nome: "Smash Remix 1.2.0", link: "https://www.jogosfas.com/game.php?id_juego=21141&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/smash-remix-icon.jpg" },
    { nome: "Geometry Dash Lite", link: "https://www.jogosfas.com/game.php?id_juego=10505&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/geometry-dash-lite-icon.jpg" },
    { nome: "Aros de Truque", link: "https://www.jogosfas.com/game.php?id_juego=13942&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/aros-de-truque-icon.jpg" },
    { nome: "Fun Ear Doctor", link: "https://y8.com/embed/fun_ear_doctor", img: "../img/fun-ear-doctor-icon.gif" },
    { nome: "Ninja Clash Heroes", link: "https://pt.y8.com/games/ninja_clash_heroes", img: "../img/ninja-clash-heroes-icon.gif" },
    { nome: "Freefall Tournament", link: "https://y8.com/embed/freefall_tournament", img: "../img/freefall-tournament-icon.gif" },
    { nome: "Sonic: Classic Heroes", link: "https://www.jogosfas.com/game.php?id_juego=19664&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/sonic-classic-heroes-icon.jpg" },
    { nome: "Cruz Sônica", link: "https://www.jogosfas.com/game.php?id_juego=12538&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/cross_sonic_race-icon.jpg" },
    { nome: "Bater Bandicoot", link: "https://www.jogosfas.com/game.php?id_juego=18305&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/Crash-THA-Capa-icon.png" },
    { nome: "Super smash bros", link: "https://www.jogosfas.com/game.php?id_juego=18425&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/super-smash-bros-icon.jpeg" },
    { nome: "Smash remix", link: "https://www.jogosfas.com/game.php?id_juego=20102&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/smash-remix2-icon.jpg" },
    { nome: "Sonic Pinball Party", link: "https://www.jogosfas.com/game.php?id_juego=20824&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/sonic-pinball-party-icon.jpg" },
    { nome: "Russian Car Driver HD", link: "https://pt.y8.com/games/russian_car_driver_hd", img: "../img/car-driver-icon.gif" },
    { nome: "Super Brawl Showdown", link: "https://pt.y8.com/games/super_brawl_showdown_", img: "../img/super-brawl-icon.gif" },
    { nome: "Mini Samurai: Kurofune", link: "https://pt.y8.com/games/mini_samurai_kurofune", img: "../img/mini-samurai-icon.gif" },
    { nome: "Kebab Fighter", link: "https://pt.y8.com/games/kebab_fighter", img: "../img/kebab-fighter-icon.gif" },
    { nome: "Pintar Pokémon Eevee", link: "https://www.jogosfas.com/game.php?id_juego=11348&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/pintar-pokemon-evee-icon.jpeg" },
    { nome: "Marvel Super Heroes vs Street Fighter", link: "https://www.jogosfas.com/game.php?id_juego=19808&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/marvel-vs-street-icon.jpg" },
    { nome: "Tartarugas Ninjas", link: "https://www.jogosfas.com/game.php?id_juego=20950&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/tartarugas-ninjas-icon.jpg" },
    { nome: "Entre nós: esconde-esconde", link: "https://www.jogosfas.com/game.php?id_juego=19982&code=v6v2vbvevdvv8bc62e766vvcd4evvvv8", img: "../img/esconde-esconde-icon.jpg" },
    { nome: "Straw Hat Samurai", link: "https://pt.y8.com/games/straw_hat_samurai", img: "../img/straw-samurai-icon.jpg" },
    { nome: "Medieval Defense Z", link: "https://pt.y8.com/games/medieval_defense_z", img: "../img/medieval-defense-z-icon.gif" },
    { nome: "Gunspin", link: "https://pt.y8.com/games/gunspin", img: "../img/gunspin-icon.gif" },
    { nome: "Drift 3 io", link: "https://pt.y8.com/games/drift_3_io", img: "../img/drift-3-io-icon.gif" },
    { nome: "Deepest Sword", link: "https://pt.y8.com/games/deepest_sword", img: "../img/deepest-sword-icon.gif" },
    { nome: "Hexblade", link: "https://pt.y8.com/games/hexblade", img: "../img/hexblade-icon.gif" },
    { nome: "Dreamtime Combat", link: "https://pt.y8.com/games/dreamtime_combat", img: "../img/dreamtime-combat-icon.gif" },
    { nome: "Self", link: "https://pt.y8.com/games/self", img: "../img/self-icon.gif" },
    { nome: "Mole", link: "https://pt.y8.com/games/mole", img: "../img/mole-icon.gif" },
    { nome: "ShapeMaze", link: "https://pt.y8.com/games/shapemaze", img: "../img/shapemaze-icon.gif" },
    { nome: "Minima Speedrun Platformere", link: "https://pt.y8.com/games/minima_speedrun_platformer", img: "../img/speedrun-icon.gif" },
    { nome: "Snow Rider 3D", link: "https://pt.y8.com/games/snow_rider_3d", img: "../img/snow-rider-icon.gif" },
    { nome: "Slope", link: "https://y8.com/embed/slope", img: "../img/slope-icon.gif" },
    { nome: "Death Run 3D", link: "https://y8.com/embed/death_run_3d", img: "../img/death-run-icon.gif" },
    { nome: "Interstellar Run", link: "https://pt.y8.com/games/interstellar_run", img: "../img/interstellar-icon.gif" },
    { nome: "Moto X3m", link: "https://y8.com/embed/moto_x3m_2", img: "../img/moto-x3m-icon.gif" },
    { nome: "Moto Taxi Sim", link: "https://y8.com/embed/moto_taxi_sim", img: "../img/moto-taxi-icon.gif" },
    { nome: "Turbo Moto Racer", link: "https://pt.y8.com/games/turbo_moto_racer", img: "../img/turbo-moto-racer-icon.gif" },
    { nome: "MTB Downhill Extreme", link: "https://pt.y8.com/games/mtb_downhill_extreme", img: "../img/mtb-downhill-icon.gif" },
    { nome: "F1 Super Prix", link: "https://pt.y8.com/games/f1_super_prix", img: "../img/f1-super-prix.gif" },
    { nome: "Extreme Offroad Cars", link: "https://pt.y8.com/games/extreme_offroad_cars", img: "../img/extreme-cars-icon.gif" },
    { nome: "Shaky Structures", link: "https://pt.y8.com/games/shaky_structures", img: "../img/shaky-icon.gif" },
    { nome: "Thug Racer", link: "https://pt.y8.com/games/thug_racer", img: "../img/thug-racer-icon.gif" },
    { nome: "Super Blocky Race", link: "https://pt.y8.com/games/super_blocky_race", img: "../img/super-blocky-race-icon.gif" },
    { nome: "Fuits Kive Up", link: "https://pt.y8.com/games/fuits_kive_up", img: "../img/fuits-kive-up.gif" },
    { nome: "FroYo Bar", link: "https://pt.y8.com/games/froyo_bar", img: "../img/froyo-bar-icon.gif" },
    { nome: "Pizza Time", link: "https://y8.com/embed/pizza_time", img: "../img/pizza-time.gif" },
    { nome: "Pizza Master", link: "https://pt.y8.com/games/pizza_master_", img: "../img/pizza-master-icon.gif" },
    { nome: "Burger Maker", link: "https://y8.com/embed/burger_maker", img: "../img/burger-maker-icon.gif" },
    { nome: "Nom Nom Hotdogs", link: "https://pt.y8.com/games/nom_nom_hotdogs", img: "../img/nom-nom-hotdogs-icon.gif" },
    { nome: "Baby Cathy", link: "https://y8.com/embed/baby_cathy_newborn", img: "../img/baby-cathy-icon.gif" },
    { nome: "Puppy House", link: "https://y8.com/embed/puppy_house", img: "../img/puppy-house-icon.gif" },
    { nome: "Short Life 2", link: "https://pt.y8.com/games/short_life_2", img: "../img/short-life-icon.gif" },
    { nome: "Trick The Guillotine", link: "https://pt.y8.com/games/handless_millionaire_trick_the_guillotine", img: "../img/handless-milionaire-icon.gif" },
    { nome: "Murder: To Kill or Not to Kill", link: "https://y8.com/embed/murder_to_kill_or_not_to_kill", img: "../img/murder-to-kill-icon.gif" },
    { nome: "Bartender The Celeb Mix", link: "https://y8.com/embed/bartender_the_celeb_mix", img: "../img/bartender-the-celeb-icon.gif" },
    { nome: "Gunblood", link: "https://pt.y8.com/games/gunblood", img: "../img/gunblood-icon.gif" },
    { nome: "Cs Online", link: "https://pt.y8.com/games/cs_online", img: "../img/cs-online-icon.gif" },
    { nome: "Hospital Bus Driver Emergency", link: "https://y8.com/embed/hospital_bus_driver_emergency", img: "../img/hospital-bus-icon.gif" },
    { nome: "Baby Cathy Ep32: Easter Day", link: "https://y8.com/embed/baby_cathy_ep32_easter_day", img: "../img/baby-cathy2-icon.gif" },
    { nome: "Roxie's Kitchen: American Pizza", link: "https://y8.com/embed/roxie_s_kitchen_american_pizza", img: "../img/roxie-kitchen-icon.gif" },
    { nome: "Yummy Ice Cream Factory", link: "https://pt.y8.com/games/yummy_ice_cream_factory", img: "../img/yummy-ice-icon.gif" },
    { nome: "3D Rubik", link: "https://pt.y8.com/games/3d_rubik", img: "../img/3d-rubik-icon.gif" },
    { nome: "Test your Love", link: "https://pt.y8.com/games/test_your_love_", img: "../img/test-your-love-icon.gif" },
    { nome: "Furious Adventure 2", link: "https://pt.y8.com/games/furious_adventure_2", img: "../img/furious-adventure-icon.gif" },
    { nome: "Football Legends 2019", link: "https://y8.com/embed/football_legends_2019", img: "../img/football-legends-icon.gif" },
    { nome: "Basketball Stars", link: "https://pt.y8.com/games/basketball_legends_2019", img: "../img/basketball-stars-icon.gif" },
    { nome: "8 Ball Billiards Classic", link: "https://pt.y8.com/games/8_ball_billiards_classic", img: "../img/8-ball-biliards-icon.gif" },
    { nome: "Super Special World de Mario Bros", link: "https://www.jogosfas.com/game.php?id_juego=21524&code=9v8v4vv74edv498e866vdbvvv67cv7v1", img: "../img/super-mario-bros-icon.jpg" },
    { nome: "Minecraft: Stunt Car Crasher", link: "https://www.jogosfas.com/game.php?id_juego=21519&code=89dc6v789vv167b8vvvvvvbb7v48d77v", img: "../img/nubic-stunt-car-crasher-icon.jpg" },
];

function openGame(nameGame,linkGame) {
    localStorage.setItem("nameGame", nameGame);
    localStorage.setItem("linkGame", linkGame);
    window.open('GameTemplate.html', "_self");
}


const jogosElemento = document.querySelector(".games");

for (const jogo of jogosDisponiveis) {
    const a_tag = document.createElement("a");
    a_tag.className = 'game_link'
    a_tag.onclick = ()=> {
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