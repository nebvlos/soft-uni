function triangleOfNums(number) {
    let string = ""
    for (i = 1; i <= number; i++) {
        for (j = 1; j <= i; j++) {
            string += i + " "
        }
        string += "\n";
    }
    console.log(string);
}
triangleOfNums(3)