function triplesOfLatin(stringN) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let lengthCalc = stringN - 1

    for (let j = 0; j <= lengthCalc; j++) {
        for (let i = 0; i <= lengthCalc; i++) {
            for (let k = 0; k <= lengthCalc; k++) {
                console.log(alphabet[j] + alphabet[i] + alphabet[k]);
            }
        }
    }
}

triplesOfLatin('2')