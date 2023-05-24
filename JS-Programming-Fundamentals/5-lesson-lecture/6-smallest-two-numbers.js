function smallestTwoNums(arrayOfNums) {
    arrayOfNums.sort((a, b) => a - b)

    let firstTwoEls = arrayOfNums.slice(0, 2)
    console.log(firstTwoEls.join(' '));

}
smallestTwoNums([3, 0, 10, 4, 7, 3])