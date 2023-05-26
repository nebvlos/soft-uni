function manOWar(infoForBattle) {
    pirateShipStatus = infoForBattle[0].split('>')
    battleShipStatus = infoForBattle[1].split('>')

    let maxCapacity = infoForBattle[2]
    let destruction = 0
    let health = 0
    let construction = 0
    let endIndex = 0
    let repairCount = 0
    let pirateShipSum = 0
    let battleShipSum = 0

    for (let i = 3; i < infoForBattle.length; i++) {

        let element = infoForBattle[i].split(' ')
        let command = element[0]
        let startIndex = Number(element[1])
        let damage = Number(element[2])

        if (element.length > 3) {
            endIndex = Number(element[2])
            damage = Number(element[3])
        }

        if (command == 'Fire') {
            if (startIndex <= (battleShipStatus.length - 1)
                && startIndex >= 0) {

                destruction = Number(battleShipStatus[startIndex]) - damage

                if (destruction <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    return
                }
                else {
                    battleShipStatus.splice(startIndex, 1, destruction)
                }
            }
        }

        else if (command == 'Defend') {
            if (startIndex <= (pirateShipStatus.length - 1)
                && startIndex >= 0
                && endIndex <= (pirateShipStatus.length - 1)
                && endIndex >= 0) {

                for (let k = startIndex; k <= endIndex; k++) {
                    destruction = Number(pirateShipStatus[k]) - damage

                    if (destruction <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        return
                    }
                    else {
                        pirateShipStatus.splice(k, 1, destruction)
                    }
                }
            }
            else {
                continue;
            }

        }

        else if (command == 'Repair') {

            health = Number(element[2])
            construction = maxCapacity - Number(pirateShipStatus[startIndex])

            if (startIndex <= (pirateShipStatus.length - 1)
                && startIndex >= 0) {
                pirateShipStatus[startIndex] += Math.min(health, construction)
            }
            else {
                continue;
            }
        }


        else if (command == 'Status') {
            for (let z = 0; z < pirateShipStatus.length; z++) {
                if ((Number(pirateShipStatus[z]) < Number(maxCapacity) * 0.2)) {
                    repairCount++
                }
            }
            console.log(`${repairCount} sections need repair.`);
            repairCount = 0
        }

        else if (command == 'Retire') {

            for (let h = 0; h < pirateShipStatus.length; h++) {
                pirateShipSum += Number(pirateShipStatus[h])
            }
            for (let s = 0; s < battleShipStatus.length; s++) {
                battleShipSum += Number(battleShipStatus[s])
            }

            console.log(`Pirate ship status: ${pirateShipSum}`);
            console.log(`Warship status: ${battleShipSum}`);
            break;
        }
    }
}

manOWar((["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])
)