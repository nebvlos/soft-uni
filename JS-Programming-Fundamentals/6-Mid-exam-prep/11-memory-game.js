function memoryGame(gameMoves) {
    let sequence = gameMoves.shift().split(' ')
    let moves = 0

    for (let i = 0; i < gameMoves.length; i++) {

        let element = gameMoves[i].split(' ')
        moveOne = Number(element[0])
        moveTwo = Number(element[1])

        if (element[0] == 'end') {
            break;
        }

        else if (sequence.length == 0) {
            break;
        }
        moves++

        if (moveOne >= 0 && moveTwo >= 0
            && moveOne !== moveTwo
            && moveOne < sequence.length
            && moveTwo < sequence.length) {
            if (sequence[moveOne] == sequence[moveTwo]) {

                let matchingElement = sequence.splice(moveOne, 1)

                for (let z = 0; z < sequence.length; z++) {
                    let currentElement = sequence[z]
                    if (matchingElement == currentElement) {
                        sequence.splice(z, 1)
                        break;
                    }
                }
                console.log(`Congrats! You have found matching elements - ${matchingElement}!`);
            }
            else if (sequence[moveOne] !== sequence[moveTwo]) {
                console.log(`Try again!`);
            }
        }

        else if (moveOne == moveTwo || moveOne < 0
            || moveTwo < 0
            || moveOne >= sequence.length
            || moveTwo >= sequence.length) {

            let addedElement = '-' + moves + 'a'
            let middle = Math.round(sequence.length / 2)
            sequence.splice(middle, 0, addedElement, addedElement)
            console.log(`Invalid input! Adding additional elements to the board`);
        }
    }

    if (sequence.length > 0) {
        console.log(`Sorry you lose :(`);
        console.log(sequence.join(' '));
    }
    else {
        console.log(`You have won in ${moves} turns!`);
    }
}
memoryGame([
    "a a",
    "1 0",
    'end',
    '1 6',
    '1 5'
]
)