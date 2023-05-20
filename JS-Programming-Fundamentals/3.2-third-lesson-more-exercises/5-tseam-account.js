function tseamAccount(array) {
    let petesGames = array[0].split(' ')
    let arrayOfCommands = []

    for (let i = 1; i < array.length; i++) {
        arrayOfCommands.push(array[i])
    }
    for (let k = 0; k < arrayOfCommands.length - 1; k++) {
        let element = arrayOfCommands[k].split(' ')
        let command = element[0]
        let game = element[1]
        if (arrayOfCommands[k] == 'Play!') {
            break;
        }
        else {
            if (command == 'Install') {
                if (petesGames.includes(game)) {
                    continue;
                }
                else {
                    petesGames.push(game)
                }
            }
            else if (command == 'Uninstall') {
                if (petesGames.includes(game)) {
                    let index = petesGames.indexOf(game)
                    petesGames.splice(index, 1)
                }
                else {
                    continue;
                }
            }
            else if (command == 'Update') {
                if (petesGames.includes(game)) {
                    petesGames.push(petesGames.splice(petesGames.indexOf(game), 1)[0]);
                }
                else {
                    continue;
                }
            }
            else if (command == 'Expansion') {
                let characters = element[1].split('-')
                let actualGame = characters[0]

                if (petesGames.includes(actualGame)) {
                    let extention = characters.join(':')
                    let afterGame = petesGames.indexOf(actualGame)
                    petesGames.splice(afterGame + 1, 0, extention)
                }
                else {
                    continue;
                }
            }
        }

    }
    console.log(petesGames.join(' '));
}
tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'])