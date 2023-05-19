function magicSum(array, sum) {
    let currentElement = 0
    let nextElement = 0
    let sumArray = []

    for (let i = 0; i < array.length; i++) {
        currentElement = array[i]
        sumArray.push(currentElement)

        for (let j = i; j < array.length - 1; j++) {
            nextElement = array[j + 1]
            if (nextElement + currentElement == sum) {
                sumArray.push(nextElement)
                console.log(sumArray.join(' '));
                sumArray = []
                sumArray.push(currentElement)
            }
        }
        sumArray = []
    }
}
magicSum([1, 2, 3, 4, 5, 6], 6)