function dungeonestDark(array) {
    let first = String(array[0].split(' '))
    let second = String(first.split('|'))
    let finalArr = second.split(',')

    let coins = 0
    let health = 100
    let name = ''
    let room = 1
    let boolean = true
    let difference = 0

    for (let i = 0; i < finalArr.length; i += 2) {
        name = finalArr[i]
        let num = Number(finalArr[i + 1])
        if (name == 'potion') {
            if (health <= 100) {
                health += num
                if (health > 100) {
                    difference = health - num
                    difference = 100 - difference
                    health = 100
                    console.log(`You healed for ${difference} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }
                else {
                    console.log(`You healed for ${num} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }
            }
            else if (health > 100) {
                difference = health - num
                difference = 100 - difference
                health = 100
                console.log(`You healed for ${difference} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        }
        else if (name == 'chest') {
            coins += num
            console.log(`You found ${num} coins.`);
        }
        else {
            if (health > 0) {
                health -= num
                if (health > 0) {
                    console.log(`You slayed ${name}.`);
                }
                else {
                    boolean = false
                    console.log(`You died! Killed by ${name}.`);
                    console.log(`Best room: ${room}`);
                    break;
                }
            }
            else {
                boolean = false
                console.log(`You died! Killed by ${name}.`);
                console.log(`Best room: ${room}`);
                break;
            }
        }

        room++
    }
    if (boolean == true) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])