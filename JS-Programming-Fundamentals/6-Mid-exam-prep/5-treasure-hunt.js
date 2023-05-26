function treasureHunt(treasureCommands) {
    let loots = treasureCommands.shift().split('|')


    for (let i = 0; i < treasureCommands.length; i++) {
        let element = treasureCommands[i].split(' ')
        let command = element[0]

        if (command == 'Yohoho!') {
            break;
        }

        else if (command == 'Loot') {
            for (let z = 1; z < element.length; z++) {
                let index = element[z]

                if (loots.includes(index) !== true) {
                    loots.unshift(index)
                }
            }
        }

        else if (command == 'Drop') {

            let index = Number(element[1])

            if (index >= 0 && index < loots.length) {
                let removedElement = loots.splice(index, 1).toString()

                loots.push(removedElement)
            }

        }

        else if (command == 'Steal') {
            let count = Number(element[1])
            let stolenLoots = loots.splice(-count)
            console.log(stolenLoots.join(', '));
        }
    }
    let sum = 0
    let length = 0
    let countLoots = 0

    for (let y = 0; y < loots.length; y++) {
        let item = loots[y]
        length += Number(item.length)
    }

    let duplicates = loots.filter((item, x) => loots.indexOf(item) !== x)

    if (duplicates == 0) {
        countLoots = Number(loots.length)
    }
    else {
        countLoots = Number(loots.length) - Number(duplicates.length)
    }

    sum = Number(length / countLoots)

    if (isNaN(sum) == true) {
        console.log(`Failed treasure hunt.`);
    }
    else {
        console.log(`Average treasure gain: ${(sum).toFixed(2)} pirate credits.`);
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
