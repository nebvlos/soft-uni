function arrayManipulations(commandsArray) {
    let arrayOfNums = commandsArray.shift().split(' ')

    for (let i = 0; i < commandsArray.length; i++) {
        let element = commandsArray[i].split(' ')
        let command = element[0]
        let number = element[1]
        let index = element[2]

        if (command == 'Add') {
            arrayOfNums.push(number)
        }
        else if (command == 'Remove') {
            let newArray = arrayOfNums.filter((x) => x != number)
            arrayOfNums = newArray
        }
        else if (command == 'RemoveAt') {
            arrayOfNums.splice(number, 1)
        }
        else if (command == 'Insert') {
            arrayOfNums.splice(index, 0, number)
        }
    }
    console.log(arrayOfNums.join(' '));
}
arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
)