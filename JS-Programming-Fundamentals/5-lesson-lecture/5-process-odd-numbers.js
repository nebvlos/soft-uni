function processOddNums(arrayOfNums) {
    let oddNumPositions = arrayOfNums.filter((x, i) => i % 2 !== 0);
    let doubledValues = oddNumPositions.map(x => x * 2).reverse()

    console.log(doubledValues.join(' '));
}
processOddNums([3, 0, 10, 4, 7, 3])