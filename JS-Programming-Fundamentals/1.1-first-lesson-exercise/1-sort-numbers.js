function maths(number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        console.log(number1);
        if (number2 > number3) {
            console.log(number2);
            console.log(number3);
        }
        else {
            console.log(number3);
            console.log(number2);
        }
    }
    else if (number2 > number1 && number2 > number3) {
        console.log(number2);
        if (number1 > number3) {
            console.log(number1);
            console.log(number3);
        }
        else {
            console.log(number3);
            console.log(number1);
        }
    }
    else if (number3 > number1 && number3 > number2) {
        console.log(number3);
        if (number1 > number2) {
            console.log(number1);
            console.log(number2);
        }
        else {
            console.log(number2);
            console.log(number1);
        }
    }
}
maths(0, 0, 2)