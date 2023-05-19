function arrRotation(arr1, rotation) {
    let newArr = []
    currentElement = 0

    for (let i = 0; i < rotation; i++) {
        currentElement = arr1[0]
        for (let j = 1; j < arr1.length; j++) {
            newArr.push(arr1[j])
        }
        newArr.push(currentElement)
        arr1 = newArr
        newArr = []
    }
    console.log(arr1.join(' '));
}
arrRotation([32, 21, 61, 1], 4)