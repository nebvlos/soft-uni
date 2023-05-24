function sumFirstAndLast(arrayOfNums) {
    let firstElement = arrayOfNums[0]
    let lastElement = arrayOfNums[arrayOfNums.length - 1]
    let sum = Number(firstElement) + Number(lastElement)
    console.log(sum);
}
sumFirstAndLast(['5', '10'])