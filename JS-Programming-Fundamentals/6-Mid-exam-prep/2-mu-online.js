function muOnline(dungeonsRooms) {
    let health = 100
    let bitcoin = 0
    let arrayOfDR = dungeonsRooms.split('|')
    let roomCount = 0
    let isTrue = true

    for (let i = 0; i < arrayOfDR.length; i++) {

        roomCount++
        let element = arrayOfDR[i].split(' ')
        let command = element[0]
        let digit = Number(element[1])

        if (command == 'potion') {
            health += digit

            if (health > 100) {
                digit = 100 - (health - digit)
                health = 100
                console.log(`You healed for ${digit} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
            else {
                console.log(`You healed for ${digit} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        }

        else if (command == 'chest') {
            bitcoin += digit
            console.log(`You found ${digit} bitcoins.`);
        }

        else {
            health = health - digit
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            }
            else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomCount}`);
                isTrue = false
                break;
            }
        }
    }

    if (isTrue == true) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoin}`);
        console.log(`Health: ${health}`);
    }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")