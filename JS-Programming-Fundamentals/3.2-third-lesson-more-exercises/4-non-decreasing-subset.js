function nonDecreasing(array) {
    let newArr = []
    let currentNum = 0
    let biggestNum = 0
    for (let i = 0; i < array.length; i++) {
        currentNum = array[i]
        if (currentNum >= biggestNum) {
            biggestNum = currentNum
            newArr.push(biggestNum)
        }
        else {
            continue;
        }
    }
    console.log(newArr.join(' '));
}
nonDecreasing([20, 3, 2, 15, 6, 1])