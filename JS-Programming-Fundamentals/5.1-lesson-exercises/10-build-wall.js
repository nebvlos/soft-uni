function buildWall(arrayOfNums) {
    let concrete = []
    let concreteUsedCount = 0
    let costOfConcrete = 0
    let specialCase = 0

    for (let i = 0; i < arrayOfNums.length; i++) {
        let currentWall = arrayOfNums[i]

        if (currentWall < 30) {
            concreteUsedCount += 195
            let index = arrayOfNums.indexOf(currentWall)
            arrayOfNums.splice(index, 1, currentWall + 1)
        }
        if (currentWall > 30) {
            specialCase = currentWall
        }

        if (i + 1 == arrayOfNums.length) {
            concrete.push(concreteUsedCount)
            costOfConcrete += concreteUsedCount
            i = -1
            concreteUsedCount = 0

            if (arrayOfNums.length !== 1) {
                if (arrayOfNums.every(x => x == 30) == true) {
                    break;
                }
                else {
                    if (arrayOfNums.includes(specialCase) == true) {
                        break;
                    }
                }
            }
            else {
                if (arrayOfNums[0] < 30) {
                    continue;
                }
                else {
                    break;
                }
            }
        }
    }

    costOfConcrete = costOfConcrete * 1900
    console.log(concrete.join(', '));
    console.log(`${costOfConcrete} pesos`);
}

buildWall([28, 28])