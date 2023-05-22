function nXnMatrix(matrixNumber) {
    let matrix = ''

    for (let i = 0; i < matrixNumber; i++) {
        for (let j = 0; j < matrixNumber; j++) {
            matrix += matrixNumber + ' '
        }
        console.log(matrix);
        matrix = ''
    }
}
nXnMatrix(3)