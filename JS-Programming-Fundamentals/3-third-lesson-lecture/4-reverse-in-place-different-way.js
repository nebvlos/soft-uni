function reverseInPlace(letters) {
    let result = ''
    for (let i = letters.length - 1; i >= 0; i--) {
        result += letters[i]
        if (i < letters.length) {
            result += ' '
        }
    }
    console.log(result);
}
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])