function theImitationGame(array) {
    let encryptedMessage = array.shift().split('')

    for (let i = 0; i < array.length; i++) {
        let element = array[i].split('|')
        let command = element[0]

        if (command == 'Decode') {
            console.log(`The decrypted message is: ${encryptedMessage.join('')}`);
            break;
        }

        else if (command == 'Move') {
            let movement = Number(element[1])
            let movedDigits = encryptedMessage.splice(0, movement)

            for (let z = 0; z < movedDigits.length; z++) {
                let currentDigit = movedDigits[z]
                encryptedMessage.push(currentDigit)
            }
        }

        else if (command == 'Insert') {
            let index = Number(element[1])
            let value = element[2].split('')
            for (let n = value.length - 1; n >= 0; n--) {
                let currentValue = value[n]
                encryptedMessage.splice(index, 0, currentValue)
            }
        }

        else if (command == 'ChangeAll') {
            let substring = element[1]
            let replacement = element[2]

            for (let y = 0; y < encryptedMessage.length; y++) {
                let currentElement = encryptedMessage[y]

                if (currentElement == substring) {
                    encryptedMessage.splice(y, 1, replacement)
                }
            }
        }
    }
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]
)