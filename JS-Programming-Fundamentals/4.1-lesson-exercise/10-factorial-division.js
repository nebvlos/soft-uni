function factorialDivision(firstNum, secondNum) {
    let resultOfFirstNum = firstNumFactorial(firstNum)
    let resultOfSecondNum = secondNumFactorial(secondNum)
    let resultOfDivision = division(resultOfFirstNum, resultOfSecondNum)
    return resultOfDivision

    function firstNumFactorial(firstNum) {
        let result = 1

        for (let i = 1; i <= firstNum; i++) {
            let currentNum = i
            result = currentNum * result
        }
        return result
    }

    function secondNumFactorial(secondNum) {
        let result = 1

        for (let i = 1; i <= secondNum; i++) {
            let currentNum = i
            result = currentNum * result
        }
        return result
    }

    function division(resultOfFirstNum, resultOfSecondNum) {
        let division = (resultOfFirstNum / resultOfSecondNum).toFixed(2)
        return division
    }
}
console.log(factorialDivision(6, 2))