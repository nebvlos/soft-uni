function simpleCalc(num1, num2, operator) {

    let resultOfOperator = differentCalculations(num1, num2, operator)
    return resultOfOperator;

    function differentCalculations(num1, num2, operator) {
        let sum = 0

        switch (operator) {
            case 'add':
                sum = num1 + num2
                break;
            case 'subtract':
                sum = num1 - num2
                break;
            case 'multiply':
                sum = num1 * num2
                break;
            case 'divide':
                sum = num1 / num2
                break;
        }
        return sum
    }
}

console.log(simpleCalc(50,
    13,
    'subtract'
))