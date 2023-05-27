function theLift(array) {

    let initialTourists = Number(array[0])
    let tourists = initialTourists
    let wagons = array[1].split(' ')


    for (let i = 0; i < wagons.length; i++) {

        if (tourists == 0) {
            break;
        }

        let currentWagon = Number(wagons[i])

        for (let z = 0; z < initialTourists; z++) {

            if (currentWagon >= 4) {
                break;
            }

            else {
                tourists -= 1
                currentWagon += 1
                wagons[i] = currentWagon

                if (tourists == 1) {
                    tourists -= 1
                    currentWagon += 1
                    wagons[i] = currentWagon
                    break;
                }
            }
        }
    }

    if (tourists == 0) {
        if (wagons.every(v => v == 4) == false) {
            console.log(`The lift has empty spots!`);
            console.log(`${wagons.join(' ')}`);
        }
        else {
            console.log(`${wagons.join(' ')}`);
        }
    }

    else if (tourists > 0) {
        console.log(`There isn't enough space! ${tourists} people in a queue!`);
        console.log(`${wagons.join(' ')}`);
    }
}

theLift([
    "0",
    "4 4"
]
)