function bombNumbers(sequence, specialBomb) {

    let sumOfElements = 0

    for (let i = 0; i < sequence.length; i++) {

        let element = sequence[i]
        let index = sequence.indexOf(specialBomb[0])
        let beforeIndex = Number(index - specialBomb[1])
        let afterIndex = Number(index + specialBomb[1])
        let elementsToBeDeleted = 0

        if (index == -1) {
            break;
        }

        else {
            if (beforeIndex < 0) {
                beforeIndex = 0
                elementsToBeDeleted = (afterIndex - beforeIndex) + 1
            }

            else {
                elementsToBeDeleted = (afterIndex - beforeIndex) + 1
            }

            if (afterIndex >= sequence.length) {
                afterIndex = Number(sequence.length)
                elementsToBeDeleted = (afterIndex - beforeIndex)
            }

            if (element == specialBomb[0]) {
                sequence.splice(beforeIndex, elementsToBeDeleted)
                i = -1
            }
        }
    }

    for (let j = 0; j < sequence.length; j++) {
        sumOfElements += sequence[j]

    }
    console.log(sumOfElements);
}

bombNumbers([2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2]
)