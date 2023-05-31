function inventory(heroesData) {

    let heroesSafe = []
    class Heroes {
        constructor(name, level, items) {
            this.name = name
            this.level = Number(level)
            this.items = items
        }
    }

    for (let data of heroesData) {
        let [name, level, items] = data.split(' / ')
        let hero = new Heroes(name, level, items)
        heroesSafe.push(hero)
    }

    heroesSafe.sort((heroA, heroB) => heroA.level - heroB.level)

    for (let hero of heroesSafe) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)