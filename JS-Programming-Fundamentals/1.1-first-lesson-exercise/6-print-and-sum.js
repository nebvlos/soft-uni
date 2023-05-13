function printAndSum(number1, number2) {
    let space = ""
    let sum = 0
    for (i = number1; i <= number2; i++) {
        sum += Number(i)
        space += i + " "
    }
    console.log(space);
    console.log(`Sum: ${sum}`);
}
printAndSum(50, 60)