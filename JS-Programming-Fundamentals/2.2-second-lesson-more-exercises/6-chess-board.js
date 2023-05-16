function chessBoard(num) {
    let board = ''
    let height = num
    let width = num
    let buff = ''
    for (let y = 0; y < height; y++) {
        if (y > 0) {
            board += '<div>' + '\n'
        }
        for (let x = 0; x < width; x++) {
            if ((x + y) % 2 == 0) {
                board += '<span class="black"></span>' + '\n'
            }
            else {
                board += '<span class="white"></span>' + '\n'
            }
        }
    }
    console.log(`<div class="chessboard">`);
    console.log(board);
}
chessBoard(3)