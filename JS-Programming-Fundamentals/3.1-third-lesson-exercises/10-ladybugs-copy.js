function ladybugs(input) {
    let field = []
    let size = Number(input[0])
    for (let i = 0; i < size; i++) {
        field[i] = 0
    }
    let indexOfLadybugs = input[1].split(' ')

    for (let i = 0; i < indexOfLadybugs.length; i++) {
        let index = indexOfLadybugs[i]
        field[index] = 1
    }

    for (let i = 2; i < input.length; i++) {
        let commands = input[i].split(' ')
        let indexLadybug = Number(commands[0])
        let direction = commands[1]
        let flyLength = Number(commands[2])

        if (indexLadybug >= field.length || indexLadybug < 0 || field[indexLadybug] == 0) {
            continue;
        }
        if (direction == 'right') {
            field[indexLadybug] == 0
            let isFly = true

            while (isFly) {
                if (field[indexLadybug + flyLength] == 0) {
                    field[indexLadybug + flyLength] = 1
                    isFly = false
                }
                else if (field[indexLadybug + flyLength] == 1) {
                    flyLength += flyLength
                }
                else if (field[indexLadybug + flyLength] == undefined) {
                    isFly = false
                }
            }
        }

    }

    console.log(field.join(' '));
}
ladybugs([3, '0 1', '0 right 1', '2 right 1'])