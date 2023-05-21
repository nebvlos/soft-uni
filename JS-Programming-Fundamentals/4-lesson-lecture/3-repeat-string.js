function repeatString(theString, repetitions) {
    // one liner 
    // console.log(theString.repeat(repetitions));

    // more algorythmic 
    let result = ''
    for (let i = 0; i < repetitions; i++) {
        result += theString
    }
    return result;
}
// let repeatedString = repeatString ("String", 2)
console.log(repeatString("String", 2));