function mergeArrays(arr1, arr2) {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 == 0) {
            newArr[i] = Number(arr1[i]) + Number(arr2[i])
        }
        else {
            newArr[i] = arr1[i] + arr2[i]
        }
    }
    console.log(newArr.join(' - '));
}
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44'])