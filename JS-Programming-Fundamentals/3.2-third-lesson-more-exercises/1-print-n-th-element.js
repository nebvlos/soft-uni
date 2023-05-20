function printNThEl(array) {
    let initialN = Number(array[array.length - 1])
    let n = initialN
    let firstElement = array[0]
    let newArr = []
    if (isNaN(n) == false) {
        for (let i = 0; i < array.length - 1; i++) {
            if (newArr.length == 0) {
                newArr.push(firstElement)
            }
            if (array[i] == array[n]) {
                newArr.push(array[n])
                n = initialN + n
            }
        }
        console.log(newArr.join(' '));
    }
}
printNThEl(['1', '2', '3', '4', '5', '6'])