
// Cria um array com os jogos disponíveis no site
  // Aqui são só exemplos.

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
    { nome: "Kiddo Denim School", link: "https://y8.com/embed/kiddo_denim_school", img: "https://img.y8.com/cloud/v2-y8-thumbs-small-thumbnails-001/163031/small.gif" },
    { nome: "Baby Cathy", link: "https://y8.com/embed/baby_cathy_ep31_sibling_care", img: "https://img.y8.com/cloud/v2-y8-thumbs-small-thumbnails-001/162535/small.gif" },
    { nome: "Roxie Kitchen: Apple Pie ", link: "https://y8.com/embed/roxie_kitchen_apple_pie", img: "../img/roxie-icon.gif" },
    { nome: "The Sorcerer", link: "https://y8.com/embed/the_sorcerer", img: "../img/the-sorcerer-icon.png" },
    { nome: "Super Mario 64", link: "https://www.jogosfas.com/game.php?id_juego=20036&code=89dc6v789vv167b8vvvvvvbb7v48d77v", img: "../img/super-mario-64.png" },
    { nome: "Sonic Branco", link: "https://www.jogosfas.com/game.php?id_juego=19834&code=89dc6v789vv167b8vvvvvvbb7v48d77v", img: "../img/sonic-branco-icon.jpg" },
    { nome: "Friday Night Funkin", link: "https://www.jogosfas.com/game.php?id_juego=20644&code=89dc6v789vv167b8vvvvvvbb7v48d77v", img: "../img/funkin-icon.jpg" },
    { nome: "Street Fighter III", link: "https://www.jogosfas.com/game.php?id_juego=17150&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/street-fighter-III-icon.jpg" },
    { nome: "Super-heróis da Marvel", link: "https://www.jogosfas.com/game.php?id_juego=19612&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/super-heroi-icon.jpg" },
    { nome: "Tekken 2", link: "https://www.jogosfas.com/game.php?id_juego=19529&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/tekken-2-icon.jpg" },
    { nome: "WWF No Mercy", link: "https://www.jogosfas.com/game.php?id_juego=20101&code=89dc6v789vv167b8vvvvvvbb7v48d77v", img: "../img/wwf-no-mercy-icon.jpg" },
    { nome: "Mortal Kombat 4", link: "https://www.jogosfas.com/game.php?id_juego=18269&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/mortal-kombat-4-icon.jpg" },
    { nome: "Mortal Kombat Unlimited", link: "https://www.jogosfas.com/game.php?id_juego=18557&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/mortal-kombat-unlimited-icon.jpg" },
    { nome: "Trilogia Ultimate Mortal Kombat", link: "https://www.jogosfas.com/game.php?id_juego=19828&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/trilogia-ultimate-icon.jpg" },
    { nome: "Dragon Ball Warriors", link: "https://www.jogosfas.com/game.php?id_juego=18406&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/dragon-ball-warrios-icon.jpg" },
    { nome: "Jogo de Boxe", link: "https://www.jogosfas.com/game.php?id_juego=10232&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/jogo-boxo-icon.jpg" },
    { nome: "Smash Remix 1.2.0", link: "https://www.jogosfas.com/game.php?id_juego=21141&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/smash-remix-icon.jpg" },
    { nome: "Geometry Dash Lite", link: "https://www.jogosfas.com/game.php?id_juego=10505&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/geometry-dash-lite-icon.jpg" },
    { nome: "Aros de Truque", link: "https://www.jogosfas.com/game.php?id_juego=13942&code=vcvvv194ceve6vcvbvbv9v84811427v1", img: "../img/aros-de-truque-icon.jpg" },
    { nome: "Fun Ear Doctor", link: "https://y8.com/embed/fun_ear_doctor", img: "../img/fun-ear-doctor-icon.gif" },
    { nome: "Freefall Tournament", link: "https://y8.com/embed/freefall_tournament", img: "../img/freefall-tournament-icon.gif" },
    { nome: "Sonic: Classic Heroes", link: "https://www.jogosfas.com/game.php?id_juego=19664&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/sonic-classic-heroes-icon.jpg" },
    { nome: "Cruz Sônica", link: "https://www.jogosfas.com/game.php?id_juego=12538&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/cross_sonic_race-icon.jpg" },
    { nome: "Bater Bandicoot", link: "https://www.jogosfas.com/game.php?id_juego=18305&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/Crash-THA-Capa-icon.png" },
    { nome: "Super smash bros", link: "https://www.jogosfas.com/game.php?id_juego=18425&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/super-smash-bros-icon.jpeg" },
    { nome: "Smash remix", link: "https://www.jogosfas.com/game.php?id_juego=20102&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/smash-remix2-icon.jpg" },
    { nome: "Sonic Pinball Party", link: "https://www.jogosfas.com/game.php?id_juego=20824&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/sonic-pinball-party-icon.jpg" },
    { nome: "Pintar Pokémon Eevee", link: "https://www.jogosfas.com/game.php?id_juego=11348&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/pintar-pokemon-evee-icon.jpeg" },
    { nome: "Marvel Super Heroes vs Street Fighter", link: "https://www.jogosfas.com/game.php?id_juego=19808&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/marvel-vs-street-icon.jpg" },
    { nome: "Tartarugas Ninjas", link: "https://www.jogosfas.com/game.php?id_juego=20950&code=19496bv1vb4ve9vv92evb2cv29981c86", img: "../img/tartarugas-ninjas-icon.jpg" },
    { nome: "Entre nós: esconde-esconde", link: "https://www.jogosfas.com/game.php?id_juego=19982&code=v6v2vbvevdvv8bc62e766vvcd4evvvv8", img: "../img/esconde-esconde-icon.jpg" },
    { nome: "Slope", link: "https://y8.com/embed/slope", img: "../img/slope-icon.gif" },
    { nome: "Death Run 3D", link: "https://y8.com/embed/death_run_3d", img: "../img/death-run-icon.gif" },
    { nome: "Moto X3m", link: "https://y8.com/embed/moto_x3m_2", img: "../img/moto-x3m-icon.gif" },
    { nome: "Moto Taxi Sim", link: "https://y8.com/embed/moto_taxi_sim", img: "../img/moto-taxi-icon.gif" },
    { nome: "Pizza Time", link: "https://y8.com/embed/pizza_time", img: "../img/pizza-time.gif" },
    { nome: "Burger Maker", link: "https://y8.com/embed/burger_maker", img: "../img/burger-maker-icon.gif" },
    { nome: "Baby Cathy", link: "https://y8.com/embed/baby_cathy_newborn", img: "../img/baby-cathy-icon.gif" },
    { nome: "Puppy House", link: "https://y8.com/embed/puppy_house", img: "../img/puppy-house-icon.gif" },
    { nome: "Murder: To Kill or Not to Kill", link: "https://y8.com/embed/murder_to_kill_or_not_to_kill", img: "../img/murder-to-kill-icon.gif" },
    { nome: "Bartender The Celeb Mix", link: "https://y8.com/embed/bartender_the_celeb_mix", img: "../img/bartender-the-celeb-icon.gif" },
    { nome: "Hospital Bus Driver Emergency", link: "https://y8.com/embed/hospital_bus_driver_emergency", img: "../img/hospital-bus-icon.gif" },
    { nome: "Baby Cathy Ep32: Easter Day", link: "https://y8.com/embed/baby_cathy_ep32_easter_day", img: "../img/baby-cathy2-icon.gif" },
    { nome: "Roxie's Kitchen: American Pizza", link: "https://y8.com/embed/roxie_s_kitchen_american_pizza", img: "../img/roxie-kitchen-icon.gif" },
    { nome: "Football Legends 2019", link: "https://y8.com/embed/football_legends_2019", img: "../img/football-legends-icon.gif" },
    { nome: "Super Special World de Mario Bros", link: "https://www.jogosfas.com/game.php?id_juego=21524&code=9v8v4vv74edv498e866vdbvvv67cv7v1", img: "../img/super-mario-bros-icon.jpg" },
    { nome: "Minecraft: Stunt Car Crasher", link: "https://www.jogosfas.com/game.php?id_juego=21519&code=89dc6v789vv167b8vvvvvvbb7v48d77v", img: "../img/nubic-stunt-car-crasher-icon.jpg" },
    { nome: "New Super Mario Bros.", link: "https://www.jogosfas.com/game.php?id_juego=19915&code=89dc6v789vv167b8vvvvvvbb7v48d77v", img: "../img/new-super-mario-bros-icon.jpg" },
    { nome: "New Super Mario Land", link: "https://www.jogosfas.com/game.php?id_juego=18139&code=89dc6v789vv167b8vvvvvvbb7v48d77v", img: "../img/super-mario-land-icon.png" },
    { nome: "Sonic e Ashuro", link: "https://www.jogosfas.com/game.php?id_juego=19787&code=89dc6v789vv167b8vvvvvvbb7v48d77v", img: "../img/sonic-e-ashura-icon.jpg" },
    { nome: "Aranha Ragdoll", link: "https://www.jogosfas.com/game.php?id_juego=14080&code=89dc6v789vv167b8vvvvvvbb7v48d77v", img: "../img/aranha-ragdoll-icon.jpg" },
    { nome: "Capitão América: Ataque do Escudo", link: "https://www.jogosfas.com/game.php?id_juego=17054&code=89dc6v789vv167b8vvvvvvbb7v48d77v", img: "../img/cropped-CAptain-America-icon.jpg" },
    { nome: "Colorir prodigiosa", link: "https://www.jogosfas.com/game.php?id_juego=11398&code=89dc6v789vv167b8vvvvvvbb7v48d77v", img: "../img/colorir-prodigiosa-icon.jpg" },
    { nome: "Doom", link: "https://www.jogosfas.com/game.php?id_juego=11249&code=89dc6v789vv167b8vvvvvvbb7v48d77v", img: "../img/doom-icon.jpg" },
    { nome: "Uncharted 4 quebra-cabeça", link: "https://www.jogosfas.com/game.php?id_juego=10901&code=89dc6v789vv167b8vvvvvvbb7v48d77v", img: "../img/uncharted-icon.jpg" },
    { nome: "Ratchet e Clank: Quebra-cabeça", link: "https://www.jogosfas.com/game.php?id_juego=10870&code=89dc6v789vv167b8vvvvvvbb7v48d77v", img: "../img/ratchet-icon.jpg" },
    { nome: "Farming Simulator", link: "https://www.jogosfas.com/game.php?id_juego=11982&code=89dc6v789vv167b8vvvvvvbb7v48d77v", img: "../img/farming-simulator-icon.jpg" },
    { nome: "LOL Surprise Claw Machine", link: "https://www.jogosfas.com/game.php?id_juego=19794&code=89dc6v789vv167b8vvvvvvbb7v48d77v", img: "../img/lol-surprise-icon.jpg" },
    { nome: "Surfistas de metrô: Nova Orleans", link: "https://www.jogosfas.com/game.php?id_juego=20392&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/subway-surfers-orleans-icon.webp" },
    { nome: "Subway Surfers São Petersburgo", link: "https://www.jogosfas.com/game.php?id_juego=20327&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/subway-surfers-petersburgo-icon.jpg" },
    { nome: "Super Mario Minecraft", link: "https://www.jogosfas.com/game.php?id_juego=19563&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/super-mario-minecraft-icon.jpg" },
    { nome: "Bros super encanador", link: "https://www.jogosfas.com/game.php?id_juego=12755&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/bros-super-icon.jpg" },
    { nome: "Sonic Advance", link: "https://www.jogosfas.com/game.php?id_juego=19514&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/sonic-advance-icon.jpg" },
    { nome: "Heróis do Sonic 2", link: "https://www.jogosfas.com/game.php?id_juego=20144&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/herois-do-sonic-icon.jpg" },
    { nome: "Crie um lindo retrato", link: "https://www.jogosfas.com/game.php?id_juego=15214&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/crie-seu-retrato-icon.jpg" },
    { nome: "Sonic 3 e Knuckles Tag Team", link: "https://www.jogosfas.com/game.php?id_juego=19990&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/sonic-3-and-knuckles-tag-team-icon.jpg" },
    { nome: "Crie sua boneca LOL", link: "https://www.jogosfas.com/game.php?id_juego=18158&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/criar-LOL-icon.jpg" },
    { nome: "Bonecas LOL como Princesas da Disney", link: "https://www.jogosfas.com/game.php?id_juego=18395&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/munecas-lol-como-princesas-disney-icon.jpg" },
    { nome: "Dragon Ball Guerreiros Supersônicos", link: "https://www.jogosfas.com/game.php?id_juego=20845&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/dragon-ball-z-supersonic-warriors-icon.jpg" },
    { nome: "Dragon Ball luta final", link: "https://www.jogosfas.com/game.php?id_juego=17755&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/dragon-ball-gt-icon.jpg" },
    { nome: "Dragon Ball Supersonic", link: "https://www.jogosfas.com/game.php?id_juego=18406&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/dragon-ball-warrios2-icon.jpg" },
    { nome: "Bishoujo Senshi", link: "https://www.jogosfas.com/game.php?id_juego=19911&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/sailor-senshi-icon.jpg" },
    { nome: "Dynamons World Funny", link: "https://www.jogosfas.com/game.php?id_juego=17815&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/dynamons-world-icon.jpg" },
    { nome: "Pokémon de ouro brilhante", link: "https://www.jogosfas.com/game.php?id_juego=19697&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/pokemon-shiny-gold-icon.jpg" },
    { nome: "Pokémon Pikachu GBA", link: "https://www.jogosfas.com/game.php?id_juego=19756&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/Pokemon-Let´s-Go-pikachu-GBA-icon.jpg" },
    { nome: "Pokémon Crystal", link: "https://www.jogosfas.com/game.php?id_juego=18281&code=2v9c16vv2819bv1b22dve6vcv7vv929v", img: "../img/Pokémon-Crystal-cover-icon.png" },
    { nome: "Sonic The Hedgehog: Edição SNES", link: "https://www.jogosfas.com/game.php?id_juego=21541&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/sonic-the-hedgehog-snes-icon.png" },
    { nome: "Sonic.EXE Sadness", link: "https://www.jogosfas.com/game.php?id_juego=18301&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/sonic-exe-sadness2-icon.jpg" },
    { nome: "Mario Vs Sonic.Exe", link: "https://www.jogosfas.com/game.php?id_juego=20065&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/mario-vs-sonic-icon.jpg" },
    { nome: "Bomberman Arcade", link: "https://www.jogosfas.com/game.php?id_juego=18592&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/bomberman-icon.jpg" },
    { nome: "Ladybug do bebê", link: "https://www.jogosfas.com/game.php?id_juego=12152&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/ladybug-bebe-icon.jpg" },
    { nome: "Metal Slug 3 Arcada", link: "https://www.jogosfas.com/game.php?id_juego=18233&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/metal-slug-3-icon.jpg" },
    { nome: "Pokémon Go brasileiro", link: "https://www.jogosfas.com/game.php?id_juego=11558&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/pokemon-go-icon.jpg" },
    { nome: "Pokémon Go: Memória", link: "https://www.jogosfas.com/game.php?id_juego=11246&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/pokemon-go-memoria-icon.jpg" },
    { nome: "Aves loucas", link: "https://www.jogosfas.com/game.php?id_juego=12846&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/aves-loucas-icon.jpg" },
    { nome: "Candy Birds", link: "https://www.jogosfas.com/game.php?id_juego=12784&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/candy-birds-icon.jpg" },
    { nome: "Mario World Angry", link: "https://www.jogosfas.com/game.php?id_juego=19684&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/mario-world-angry-icon.jpg" },
    { nome: "Jogo do Mário (V1.0)", link: "https://www.jogosfas.com/game.php?id_juego=21273&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/jogo-do-mario-icon.jpg" },
    { nome: "Goku Memory", link: "https://www.jogosfas.com/game.php?id_juego=10753&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/goku-memory-icon.jpg" },
    { nome: "Fortnite Battle Memory", link: "https://www.jogosfas.com/game.php?id_juego=13230&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/fortnite-memory-icon.jpg" },
    { nome: "Kopanito All-Stars Football", link: "https://www.jogosfas.com/game.php?id_juego=10995&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/kopanito-all-stars-soccer-icon.jpg" },
    { nome: "FIFA 2000 PlayStation", link: "https://www.jogosfas.com/game.php?id_juego=18788&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/fifa-2000-playstation-icon.jpg" },
    { nome: "Pontapé de grande penalidade na UEFA", link: "https://www.jogosfas.com/game.php?id_juego=12168&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/penalidade-na-uefa-icon.jpg" },
    { nome: "PlayStation FIFA 2003", link: "https://www.jogosfas.com/game.php?id_juego=18669&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/fifa-soccer-2003-playstation-front-cover-icon.jpg" },
    { nome: "Troll Boxing", link: "https://www.jogosfas.com/game.php?id_juego=14821&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/troll-boxing-game-icon.jpg" },
    { nome: "Os Croods: Enigma fandejuegos", link: "https://www.jogosfas.com/game.php?id_juego=6201&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/croods-rompecabezas-fandejuegos-icon.jpg" },
    { nome: "Tarzan da selva", link: "https://www.jogosfas.com/game.php?id_juego=19465&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/tarzan-da-selvan-icon.jpg" },
    { nome: "Donkey Kong Country", link: "https://www.jogosfas.com/game.php?id_juego=20926&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/donkey-kong2-icon.jpg" },
    { nome: "KULI", link: "https://www.jogosfas.com/game.php?id_juego=10485&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/kuli-icon.jpg" },
    { nome: "The Walking Dead: Cidade abandonada", link: "https://www.jogosfas.com/game.php?id_juego=11993&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/the-walking-dead-icon.jpg" },
    { nome: "Fortnite Zombies on-line", link: "https://www.jogosfas.com/game.php?id_juego=13227&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/fortnite-zombi-icon.jpg" },
    { nome: "PJ Masks para pintar", link: "https://www.jogosfas.com/game.php?id_juego=11211&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/pj-masks-para-pintar-icon.png" },
    { nome: "Peppa Pig: caixa de tinta", link: "https://www.jogosfas.com/game.php?id_juego=19713&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/peppa-pig-caja-de-pintura-icon.jpg" },
    { nome: "Pinte a mulher GTA V", link: "https://www.jogosfas.com/game.php?id_juego=11170&code=v44vv6v8e19vvdvv68bvv4v8v689v6v9", img: "../img/pintar-la-mujer-de-gta-v-icon.jpg" },
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