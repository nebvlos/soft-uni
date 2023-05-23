function pointsValidation(array) {

    let x1 = array[0]
    let y1 = array[1]
    let x2 = array[2]
    let y2 = array[3]

    let x = x2 - x1
    let y = y2 - y1
    let distance = 0

    let firstDistance = checkFirstDistance()
    let secondDistance = checkSecondDistance()
    let distanceChecker = checkDistance()

    let integerChecker = checkIfInteger()
    return integerChecker

    function checkDistance() {
        distance = Math.sqrt((x * x) + (y * y))
        return distance
    }

    function checkFirstDistance() {
        let firstCheckX = 0 - x1
        let firstCheckY = 0 - y1

        let firstDistanceCheck = Math.sqrt((firstCheckX * firstCheckX) + (firstCheckY * firstCheckY))
        return firstDistanceCheck;
    }

    function checkSecondDistance() {
        let secondCheckX = 0 - x2
        let secondCheckY = 0 - y2

        let secondDistanceCheck = Math.sqrt((secondCheckX * secondCheckX) + (secondCheckY * secondCheckY))
        return secondDistanceCheck;
    }

    function checkIfInteger() {
        let resultPrinted = ''
        if (Number.isInteger(firstDistance) == true) {
            resultPrinted += `{${x1}, ${y1}} to {0, 0} is valid\n`;
        }
        else {
            resultPrinted += `{${x1}, ${y1}} to {0, 0} is invalid\n`
        }

        if (Number.isInteger(secondDistance) == true) {
            resultPrinted += `{${x2}, ${y2}} to {0, 0} is valid\n`;
        }
        else {
            resultPrinted += `{${x2}, ${y2}} to {0, 0} is invalid\n`
        }

        if (Number.isInteger(distanceChecker) == true) {
            resultPrinted += `{${x1}, ${y1}} to {${x2}, ${y2}} is valid\n`;
        }
        else {
            resultPrinted += `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid\n`
        }
        return resultPrinted
    }

}

console.log(pointsValidation([3, 0, 0, 4]))