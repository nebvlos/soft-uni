function maths(n) {
    let counter = 0
    let sum = 0
    for (i = 1; i <= 100; i += 2) {
        counter++
        console.log(i);
        sum += i
        if (counter == n) {
            break;
        }
    }
    console.log(`Sum: ${sum}`);
}
maths(3)