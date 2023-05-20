function addAndRemove(array) {
    let step = 1
    let command = ''
    let arrayOfNums = []

    for (let i = 0; i < array.length; i++) {
        command = array[i]
        if (command == 'add') {
            arrayOfNums.push(step)
        }
        else {
            arrayOfNums.pop(step)
        }
        step++
    }
    if (arrayOfNums.length == 0) {
        console.log('Empty');
    }
    else {
        console.log(arrayOfNums.join(' '));
    }
}

addAndRemove(['remove', 'remove', 'remove'])