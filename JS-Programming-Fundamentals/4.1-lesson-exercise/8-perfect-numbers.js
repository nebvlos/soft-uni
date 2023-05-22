function perfectNumber(num) {
    let checkIfPerfect = isPerfect(num)

    if (checkIfPerfect == num) {
        console.log(`We have a perfect number!`);
    }
    else {
        console.log(`It's not so perfect.`);
    }

    function isPerfect(num) {
        let sum = 0
        for (let i = 0; i < num; i++) {
            if (num % i == 0) {
                sum += i
            }
        }
        return sum
    }
}
perfectNumber(6)