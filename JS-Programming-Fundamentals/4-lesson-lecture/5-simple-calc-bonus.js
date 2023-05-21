function simpleCalc(num1, num2, operator) {
    let resultMultiplication = calcMultiply(num1, num2, operator)
    let resultDividing = calcDivide(num1, num2, operator)
    let resultAdding = calcAdd(num1, num2, operator)
    let resultSubtraction = calcSubtract(num1, num2, operator)

    if (calcMultiply(num1, num2, operator)) {
        console.log(resultMultiplication);
    }
    else if (calcDivide(num1, num2, operator)) {
        console.log(resultDividing);
    }
    else if (calcAdd(num1, num2, operator)) {
        console.log(resultAdding);
    }
    else {
        console.log(resultSubtraction);
    }
}

function calcMultiply(num1, num2, operator) {
    let sumOfMultiplication = 0
    if (operator == 'multiply') {
        return sumOfMultiplication = num1 * num2
    }
}
function calcDivide(num1, num2, operator) {
    let sumOfDividing = 0
    if (operator == 'divide') {
        return sumOfDividing = num1 / num2
    }
}
function calcAdd(num1, num2, operator) {
    let sumOfAdding = 0
    if (operator == 'add') {
        return sumOfAdding = num1 + num2
    }
}
function calcSubtract(num1, num2, operator) {
    let sumOfSubtraction = 0
    if (operator == 'subtract') {
        return sumOfSubtraction = num1 - num2
    }
}
simpleCalc(50,
    13,
    'subtract'
)