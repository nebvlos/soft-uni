function charactersInRange(charOne, charTwo) {
    let resultOfCharCode = convertToCharCode(charOne, charTwo)
    let resultOfCharactersInbetween = charactersInbetweenResult(charOne, charTwo)

    return resultOfCharactersInbetween.join(' ')

    function charactersInbetweenResult() {

        let range = resultOfCharCode[1] - resultOfCharCode[0]
        let count = resultOfCharCode[0]
        let charactersInbetween = []

        for (let i = 0; i < range - 1; i++) {
            count++
            let variable = String.fromCharCode(count)
            charactersInbetween.push(variable)
        }
        return charactersInbetween
    }


    function convertToCharCode(charOne, charTwo) {
        let orderedArray = []
        let charOneNumber = charOne.charCodeAt(0)
        let charTwoNumber = charTwo.charCodeAt(0)

        if (charOneNumber < charTwoNumber) {
            orderedArray.push(charOneNumber)
            orderedArray.push(charTwoNumber)
        }
        else {
            orderedArray.push(charTwoNumber)
            orderedArray.push(charOneNumber)
        }
        return orderedArray;
    }
}

console.log(charactersInRange('#',
    ':'
))