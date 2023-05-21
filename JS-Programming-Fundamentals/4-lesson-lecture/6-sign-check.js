function signCheck(numOne, numTwo, numThree) {
    let resultOfMultiplication = checkTwoSigns(numOne, numTwo)
    let checkSignOfThirdNum = Math.sign(numThree)

    if (checkSignOfThirdNum == 1 && resultOfMultiplication == true) {
        resultOfMultiplication = true
        console.log('Positive');
    }
    else if (checkSignOfThirdNum !== 1 && resultOfMultiplication == false) {
        resultOfMultiplication = true
        console.log('Positive');
    }
    else {
        resultOfMultiplication = false
        console.log('Negative');
    }

}

function checkTwoSigns(numOne, numTwo) {
    let checkSignOfFirstNum = Math.sign(numOne)
    let checkSignOfSecondNum = Math.sign(numTwo)
    let checkIfMultiplicationIsPositive = true

    if (checkSignOfFirstNum == 1 && checkSignOfSecondNum == 1) {
        checkIfMultiplicationIsPositive = true
    }
    else if (checkSignOfFirstNum == 1 && checkSignOfSecondNum == -1) {
        checkIfMultiplicationIsPositive = false
    }
    else if (checkSignOfFirstNum == -1 && checkSignOfSecondNum == 1) {
        checkIfMultiplicationIsPositive = false
    }
    else {
        checkIfMultiplicationIsPositive = true
    }
    return checkIfMultiplicationIsPositive
}

// checkTwoSigns (5, 12)
signCheck(-6,
    -12,
    14
)