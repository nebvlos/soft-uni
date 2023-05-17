function reverseArray(num, arr) {
    let firstNums = []
    for (let i = num - 1; i >= 0; i--) {
        firstNums.push(arr[i])
    }
    let result = ''
    for (let j = 0; j < firstNums.length; j++) {
        result += firstNums[j]
        if (j < firstNums.length) {
            result += ' '
        }
    }
    console.log(result);
}
reverseArray(3, [10, 20, 30, 40, 50])