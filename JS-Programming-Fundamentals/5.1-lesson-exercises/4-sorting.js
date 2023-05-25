function sorting(arrayToBeSorted) {
    let sortedIncreasingOrder = arrayToBeSorted.sort((a, b) => a - b)
    let sortedAsPerRequest = []

    for (let i = 0; i < sortedIncreasingOrder.length; i++) {
        if (sortedAsPerRequest.length == sortedIncreasingOrder.length) {
            break;
        }

        let minNumber = sortedIncreasingOrder[i]

        for (let j = sortedIncreasingOrder.length - (i); j > 0; j--) {
            let maxNumber = sortedIncreasingOrder[j - 1]

            if (sortedIncreasingOrder.length % 2 == 0) {
                sortedAsPerRequest.push(maxNumber)
                sortedAsPerRequest.push(minNumber)
                break;
            }
            else {
                if (maxNumber == minNumber) {
                    sortedAsPerRequest.push(maxNumber)
                    break;
                }
                else {
                    sortedAsPerRequest.push(maxNumber)
                    sortedAsPerRequest.push(minNumber)
                    break;
                }
            }

        }

    }
    console.log(sortedAsPerRequest.join(' '));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])