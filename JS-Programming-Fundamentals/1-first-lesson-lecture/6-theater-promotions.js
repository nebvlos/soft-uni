function theatre(day, age) {
    let result = 0
    if (day == "Weekday") {
        if (age >= 0 && age <= 18) {
            result = 12
        }
        else if (age > 18 && age <= 64) {
            result = 18
        }
        else if (age > 64 && age <= 122) {
            result = 12
        }
        else {
            result = "Error!"
        }
    }
    else if (day == "Weekend") {
        if (age >= 0 && age <= 18) {
            result = 15
        }
        else if (age > 18 && age <= 64) {
            result = 20
        }
        else if (age > 64 && age <= 122) {
            result = 15
        }
        else {
            result = "Error!"
        }
    }
    else if (day == "Holiday") {
        if (age >= 0 && age <= 18) {
            result = 5
        }
        else if (age > 18 && age <= 64) {
            result = 12
        }
        else if (age > 64 && age <= 122) {
            result = 10
        }
        else {
            result = "Error!"
        }
    }
    if (result > 0) {
        console.log(`${result}$`);
    }
    else {
        console.log(result);
    }
}
theatre("Weekend", 122)