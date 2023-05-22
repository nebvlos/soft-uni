function loadingBar(num) {
    let loadingUpper = upperBody(num)
    let loadingLower = lowerBody()
    let checkNumber = checkIfSmallerThan100(num)
    let completedMessage = completed(num)
    let checkFinalPercent = completedPercentageShow(num)

    if (checkNumber == true) {
        console.log(loadingUpper);
        console.log(loadingLower);
    }
    else {
        console.log(completedMessage);
        console.log(checkFinalPercent);
    }

    function upperBody(num) {
        let percent = ''
        for (let j = 0; j < (num / 10); j++) {
            percent += '%'
        }
        for (let i = (num / 10); i < 10; i++) {
            percent += '.'
        }
        let upper = `${num}% [${percent}]`
        return upper
    }

    function lowerBody() {
        let lower = 'Still loading...'
        return lower
    }

    function checkIfSmallerThan100(num) {
        if (num == 100) {
            return false
        }
        else {
            return true
        }
    }

    function completed(num) {
        completeString = (num) + '%' + ' ' + 'Complete!'
        return completeString
    }

    function completedPercentageShow(num) {
        let percentShow = ''
        for (let j = 0; j < (num / 10); j++) {
            percentShow += '%'
        }
        let finalPercent = `[${percentShow}]`
        return finalPercent
    }
}

loadingBar(40)