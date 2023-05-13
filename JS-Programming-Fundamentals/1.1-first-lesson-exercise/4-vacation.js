function vacation(group, typeOfGroup, dayOfWeek) {
    let price = 0
    let totalPrice = 0
    if (typeOfGroup == "Students") {
        if (group < 30) {
            if (dayOfWeek == "Friday") {
                price = 8.45
            }
            else if (dayOfWeek == "Saturday") {
                price = 9.80
            }
            else if (dayOfWeek == "Sunday") {
                price = 10.46
            }
        }
        else if (group >= 30) {
            if (dayOfWeek == "Friday") {
                price = 8.45 * 0.85
            }
            else if (dayOfWeek == "Saturday") {
                price = 9.80 * 0.85
            }
            else if (dayOfWeek == "Sunday") {
                price = 10.46 * 0.85
            }
        }
    }
    else if (typeOfGroup == "Business") {
        if (group < 100) {
            if (dayOfWeek == "Friday") {
                price = 10.90
            }
            else if (dayOfWeek == "Saturday") {
                price = 15.60
            }
            else if (dayOfWeek == "Sunday") {
                price = 16
            }
        }
        else if (group >= 100) {
            group = group - 10
            if (dayOfWeek == "Friday") {
                price = 10.90
            }
            else if (dayOfWeek == "Saturday") {
                price = 15.60
            }
            else if (dayOfWeek == "Sunday") {
                price = 16
            }
        }
    }
    else if (typeOfGroup == "Regular") {
        if (group < 10 || group > 20) {
            if (dayOfWeek == "Friday") {
                price = 15
            }
            else if (dayOfWeek == "Saturday") {
                price = 20
            }
            else if (dayOfWeek == "Sunday") {
                price = 22.50
            }
        }
        else if (group >= 10 && group <= 20) {
            if (dayOfWeek == "Friday") {
                price = 15 * 0.95
            }
            else if (dayOfWeek == "Saturday") {
                price = 20 * 0.95
            }
            else if (dayOfWeek == "Sunday") {
                price = 22.50 * 0.95
            }
        }
    }
    totalPrice = group * price
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday"
)