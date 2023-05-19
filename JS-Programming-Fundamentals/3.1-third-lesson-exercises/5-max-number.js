function maxNum(arr) {
    let currentNum = 0
    let nextNum = 0
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        currentNum = arr[i]
        nextNum = arr[i + 1]

        if (currentNum > nextNum) {
            newArr.push(currentNum)
        }
        if (i == arr.length - 1) {
            newArr.push(currentNum)
        }
    }

    let lastArr = []
    let lastArrCurrentNum = 0
    let lastArrNextNum = 0

    if (newArr[0] < newArr[1]) {
        for (let j = 0; j < newArr.length; j++) {
            lastArrCurrentNum = newArr[j]
            lastArrNextNum = newArr[j + 1]

            if (lastArrCurrentNum > lastArrNextNum) {
                lastArr.push(lastArrCurrentNum)
            }
            if (j == newArr.length - 1) {
                lastArr.push(lastArrCurrentNum)
            }
        }
        console.log(lastArr.join(' '));
    }
    else {
        console.log(newArr.join(' '));
    }
}
maxNum([1, 4, 3, 2])