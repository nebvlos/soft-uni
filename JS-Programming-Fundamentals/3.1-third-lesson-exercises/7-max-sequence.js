function maxSequence(arr) {

    let longestSequence = [];
    let temporarySequence = []
    let firstElement = arr[0]
    let nextElement = 0

    for (let i = 0; i < arr.length; i++) {
        firstElement = arr[i]
        temporarySequence.push(firstElement)


        for (let j = i; j < arr.length; j++) {
            nextElement = arr[j + 1]
            if (firstElement == nextElement) {
                temporarySequence.push(nextElement)
            }
            else {
                break;
            }
        }
        if (temporarySequence.length > longestSequence.length) {
            longestSequence = temporarySequence
        }
        temporarySequence = []
    }
    console.log(longestSequence.join(' '));
}

maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])