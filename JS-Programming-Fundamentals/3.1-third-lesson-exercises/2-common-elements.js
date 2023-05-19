function commonEls(commonString1, commonString2) {
    // if (commonString1.length >= commonString2.length){
    for (let i = 0; i < commonString2.length; i++) {
        if (commonString2.includes(commonString1[i])) {
            console.log(commonString1[i]);
        }
    }
}
commonEls(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])