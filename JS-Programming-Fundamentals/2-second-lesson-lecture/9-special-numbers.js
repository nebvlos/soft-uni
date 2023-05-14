function specialNums(number) {
    let boolean = ''
    let sum = 0
    let d = 0

    for (let i = 1; i <= number; i++) {
        if (i <= 9) {
            sum = i
            if (sum == 5 || sum == 7 || sum == 11) {
                boolean = "True"
                console.log(`${i} -> ${boolean}`);
            }
            else {
                boolean = "False"
                console.log(`${i} -> ${boolean}`);
            }
        }
        if (i >= 10) {
            d = i
            while (d) {
                sum += d % 10
                d = Math.floor(d / 10)
            }

            if (sum == 5 || sum == 7 || sum == 11) {
                boolean = "True"
                console.log(`${i} -> ${boolean}`);
            }
            else {
                boolean = "False"
                console.log(`${i} -> ${boolean}`);
            }
            sum = 0
        }
    }
}


specialNums(20)