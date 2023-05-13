function reverseString(text) {
    let splitString = text.split("")
    let reverseArray = splitString.reverse()
    let joinArray = reverseArray.join("")
    console.log(joinArray);
}
reverseString("1234")