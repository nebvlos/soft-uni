function magicMatrices(array) {

    let rowTotal = array[0].reduce((a, b) => a + b)
    let colTotal = 0

    array.forEach(element => {
        colTotal += element[0]
    });

    let boolean = true

    for (let i = 0; i < array.length; i++) {
        let currentCol = 0
        let currentRow = 0
        for (let k = 0; k < array.length; k++) {
            let x = array[i][k]
            currentRow += x
        }
        for (let j = 0; j < array.length; j++) {
            let y = array[j][i]
            currentCol += y
        }

        if (currentCol !== colTotal || currentRow !== rowTotal) {
            boolean = false
            break;
        }
    }
    console.log(boolean);
}
magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]])


