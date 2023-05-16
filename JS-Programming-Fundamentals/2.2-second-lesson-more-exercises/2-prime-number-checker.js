function numChecker(num) {
    let isPrime = true
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false
            break;
        }
    }
    if (isPrime == true) {
        console.log('true');
    }
    else {
        console.log('false');
    }
}
numChecker(81)