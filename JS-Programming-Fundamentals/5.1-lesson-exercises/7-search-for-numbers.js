function searchForNumber(arrayOfElements, arrayOfCommands) {

    let manipulatedArray = arrayOfElements.slice(0, arrayOfCommands[0])
    let deleteCommand = arrayOfCommands[1]
    let elementForSearch = arrayOfCommands[2]
    let count = 0
    manipulatedArray.splice(0, deleteCommand)

    for (let i = 0; i < manipulatedArray.length; i++) {
        let element = manipulatedArray[i]

        if (element == elementForSearch) {
            count++
        }
    }
    if (count != 0) {
        console.log(`Number ${elementForSearch} occurs ${count} times.`);
    }
    else {
        console.log(`Number ${elementForSearch} occurs ${count} times.`);
    }
}
searchForNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 6]
)