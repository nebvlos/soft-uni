function ladyBugs(array) {
    let sizeOFField = array[0]
    let initialLadybugs = array[1].split(' ')
    let commands = []
    let position = 0
    let direction = ''
    let ladyBugPosition = 0

    for (let i = 2; i < array.length; i++) {
        let element = array[i]
        commands.push(element)
    }
    commands = commands.toString()
    commands = commands.split(' ')
    commands = commands.toString()
    commands = commands.split(',')


    for (let j = 0; j < sizeOFField - 1; j++) {
        for (let k = 0; k < initialLadybugs.length - 1; k++) {
            let ladyBug = initialLadybugs[k]
        }




    }
}


// console.log(initialLadybugs);



ladyBugs([3, '0 1', '0 right 1', '2 right 1'])