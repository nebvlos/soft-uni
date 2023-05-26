function numbers(integers) {
    let workArray = integers.split(' ')
    let averageValue = 0
    let sortedArray = []
    let countElements = 0
    let finalArray = []

    for (let i = 0; i < workArray.length; i++) {
        let element = Number(workArray[i])
        averageValue += element
    }
    averageValue = (averageValue / Number(workArray.length)).toFixed(2)

    for (let z = 0; z < workArray.length; z++) {
        let element = Number(workArray[z])

        if (element > averageValue) {
            sortedArray.push(element)
        }
    }

    if (sortedArray.length == 0) {
        console.log(`No`);
        return
    }
    else {
        sortedArray = sortedArray.sort((a, b) => b - a)

        for (let y = 0; y < sortedArray.length; y++) {
            let element = Number(sortedArray[y])
            finalArray.push(element)
            countElements++

            if (countElements >= 5) {
                break;
            }
        }

        console.log(finalArray.join(' '));
    }
}
numbers('-1 -2 -3 -4 -5 -6')