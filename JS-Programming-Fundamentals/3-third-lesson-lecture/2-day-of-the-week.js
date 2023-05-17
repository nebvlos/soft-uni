function nameOfWeek(input) {
    let nameOfDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let numOfDay = nameOfDay[input - 1]
    if (input > 7) {
        console.log(`Invalid day!`);
    }
    else {
        console.log(numOfDay);
    }
}
nameOfWeek(1)