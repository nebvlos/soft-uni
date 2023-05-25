function arrayManipulator(arrayOfNumbers, commands) {
    let manipulatedArray = arrayOfNumbers.slice()

    for (let i = 0; i < commands.length; i++) {

        let splitCommand = commands[i].split(' ')
        let command = splitCommand[0]
        let index = Number(splitCommand[1])
        let element = Number(splitCommand[2])

        if (command == 'add') {
            if (index > manipulatedArray.length) {
                index = Number(manipulatedArray.length)
                manipulatedArray.splice(index, 0, element)
            }
            else {
                manipulatedArray.splice(index, 0, element)
            }
        }

        else if (command == 'addMany') {
            for (let j = splitCommand.length - 1; j > 1; j--) {
                element = Number(splitCommand[j])
                manipulatedArray.splice(index, 0, element)
            }
        }

        else if (command == 'contains') {
            console.log(manipulatedArray.indexOf(index))
        }

        else if (command == 'remove') {
            manipulatedArray.splice(index, 1)
        }

        else if (command == 'shift') {
            for (let k = 0; k < index; k++) {
                let elementToTheLeft = manipulatedArray.shift()
                manipulatedArray.push(elementToTheLeft)
            }
        }

        else if (command == 'sumPairs') {
            let moleArray = manipulatedArray
            let arrayOfSummedPairs = []

            for (let z = 0; z < moleArray.length; z += 2) {
                let sumOfPairs = 0
                let firstElement = moleArray[z]
                let secondElement = moleArray[z + 1]



                if (secondElement == undefined) {
                    sumOfPairs = firstElement
                    arrayOfSummedPairs.push(sumOfPairs)
                }
                else {
                    sumOfPairs = firstElement + secondElement
                    arrayOfSummedPairs.push(sumOfPairs)
                    manipulatedArray = arrayOfSummedPairs
                }
            }
        }

        else if (command == 'print') {
            console.log(`[ ${manipulatedArray.join(', ')} ]`);
            break;
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['print', 'add 9 8', 'contains 1', 'contains 3']
)