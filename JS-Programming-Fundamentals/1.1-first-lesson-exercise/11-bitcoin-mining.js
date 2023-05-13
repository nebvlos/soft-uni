function bitcoin(input) {
    let gold = 0
    let countGold = 0
    let countDays = 0
    let boughtBitcoins = 0
    let dayFirstPurchased = 0

    for (i = 0; i < input.length; i++) {
        countDays++

        if (countDays % 3 === 0) {
            gold = (input[i] * 0.7) * 67.51
            countGold += gold
        }
        else if (countDays % 3 !== 0) {
            gold = input[i] * 67.51
            countGold += gold
        }

        while (countGold >= 11949.16) {
            if (boughtBitcoins == 0) {
                dayFirstPurchased = countDays
                boughtBitcoins++
                countGold = countGold - 11949.16
            }
            else {
                boughtBitcoins++
                countGold = countGold - 11949.16
            }
        }
    }
    if (boughtBitcoins != 0) {
        console.log(`Bought bitcoins: ${boughtBitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${dayFirstPurchased}`);
        console.log(`Left money: ${countGold.toFixed(2)} lv.`);
    }
    else {
        console.log(`Bought bitcoins: ${boughtBitcoins}`);
        console.log(`Left money: ${countGold.toFixed(2)} lv.`);
    }
}
bitcoin([100, 200, 300])