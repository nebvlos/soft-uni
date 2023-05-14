function amazingNumbers(num) {
    let string = num + ''
    let sum = 0
    let booleanAnswer = ''

    for (let i = 0; i < string.length; i++) {
        sum += Number(string[i])
    }
    let boolean = (sum + '').indexOf('9') > -1;

    if (boolean == true) {
        booleanAnswer = "True"
        console.log(`${num} Amazing? ${booleanAnswer}`);
    }
    else {
        booleanAnswer = "False"
        console.log(`${num} Amazing? ${booleanAnswer}`);
    }
}
amazingNumbers(999)