function numberModification(num) {

    let numToString = String(num)
    let average = 0
    let numDigits = 0

    for (let i = 0; i < numToString.length; i++) {

        numDigits = 0

        for (let j = 0; j < numToString.length; j++) {

            numDigits += Number(numToString[j])
            average = numDigits / Number(numToString.length)
        }

        if (average < 5) {
            numToString += '9'
        }
        else {
            break;
        }
    }
    console.log(numToString);
}
numberModification(5835)