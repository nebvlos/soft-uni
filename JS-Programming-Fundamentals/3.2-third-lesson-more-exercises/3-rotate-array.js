function rotateArray(array) {
    let rotationCount = Number(array[array.length - 1])
    array.pop(array.length - 1)
    let newArr = []

    for (let i = 0; i < rotationCount; i++) {
        newArr.push(array[array.length - 1])
        for (let k = 0; k < array.length - 1; k++) {
            newArr.push(array[k])
        }
        array = newArr
        newArr = []
    }

    console.log(array.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])