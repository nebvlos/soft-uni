function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let countLostFights = 0
    let countHelmetPrice = 0
    let countSwordPrice = 0
    let countShieldPrice = 0
    let countShieldBreaks = 0
    let countArmorPrice = 0
    let expensesTotal = 0
    for (let i = 0; i < lostFights; i++) {
        countLostFights++
        if (countLostFights % 6 == 0) {
            if (countShieldBreaks % 2 == 0 && countShieldBreaks != 0) {
                countArmorPrice += armorPrice
                countHelmetPrice += helmetPrice
                countSwordPrice += swordPrice
                countShieldPrice += shieldPrice
                countShieldBreaks = 0

            }
            else {
                countHelmetPrice += helmetPrice
                countSwordPrice += swordPrice
                countShieldPrice += shieldPrice
                countShieldBreaks += 2
            }
        }

        else if (countLostFights % 2 == 0) {
            countHelmetPrice += helmetPrice
        }
        else if (countLostFights % 3 == 0) {
            countSwordPrice += swordPrice
        }
    }
    expensesTotal = countArmorPrice + countHelmetPrice + countSwordPrice + countShieldPrice
    console.log(`Gladiator expenses: ${expensesTotal.toFixed(2)} aureus`);
}
gladiator(23,
    12.50,
    21.50,
    40,
    200
)