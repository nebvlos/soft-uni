function negativeOrPositive(arrayofNums) {
    let newArray = []

    for (let i = 0; i < arrayofNums.length; i++) {

        let element = Number(arrayofNums[i])

        if (element < 0) {
            newArray.unshift(element)
        }
        else {
            newArray.push(element)
        }
    }
    console.log(newArray.join('\n'));
}

negativeOrPositive(['3', '-2', '0', '-1'])