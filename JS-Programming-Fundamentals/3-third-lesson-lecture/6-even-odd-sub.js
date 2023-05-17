function subEvenAndOdd(arr) {
    let sumEven = 0
    let sumOdd = 0
    let totalDiff = 0
    for (let numArr of arr) {
        if (numArr % 2 == 0) {
            sumEven += numArr
        }
        else {
            sumOdd += numArr
        }
    }
    totalDiff = sumEven - sumOdd
    console.log(totalDiff);
}
subEvenAndOdd([2, 4, 6, 8, 10])