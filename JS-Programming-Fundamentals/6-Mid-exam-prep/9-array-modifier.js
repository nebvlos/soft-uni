function arrayModifier(array) {

    let modifiedArray = array.shift().split(' ').map(Number)
    let commands = array.slice()

    for (let i = 0; i < commands.length; i++) {
        let element = commands[i].split(' ')
        let command = element[0]

        if (command == 'swap') {
            let firstIndex = Number(element[1])
            let secondIndex = Number(element[2])
            let tempVariable = modifiedArray[firstIndex]
            modifiedArray[firstIndex] = modifiedArray[secondIndex]
            modifiedArray[secondIndex] = tempVariable
        }

        else if (command == 'multiply') {
            let firstIndex = Number(element[1])
            let secondIndex = Number(element[2])
            modifiedArray[firstIndex] = Number(modifiedArray[firstIndex] * modifiedArray[secondIndex])
        }

        else if (command == 'decrease') {
            let newArray = modifiedArray.map(x => x - 1)
            modifiedArray = newArray
        }

        else if (command == 'end') {
            break;
        }
    }
    console.log(modifiedArray.join(', '));
}
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
)