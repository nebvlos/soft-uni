function train(arrayOfStrings) {

    let wagons = arrayOfStrings.shift().split(' ')
    let maxCapacityOfWagon = Number(arrayOfStrings.shift())

    for (let i = 0; i < arrayOfStrings.length; i++) {
        let element = arrayOfStrings[i].split(' ')
        let action = ''
        let number = 0

        if (element.length == 1) {

            number = Number(element[0])

            for (let j = 0; j < wagons.length; j++) {
                let currentWagon = Number(wagons[j])
                let willPassengersFit = currentWagon + number

                if (willPassengersFit > maxCapacityOfWagon) {
                    continue;
                }
                else {
                    wagons.splice(j, 1, willPassengersFit)
                    break;
                }
            }
        }
        else {
            action = element[0]
            number = Number(element[1])
        }

        if (action == 'Add') {
            wagons.push(number)
        }
    }
    console.log(wagons.join(' '));
}
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'])