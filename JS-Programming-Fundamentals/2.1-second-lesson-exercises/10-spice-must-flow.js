function spices(startingYield) {
    let countYield = startingYield
    let countSpices = 0
    let countDays = 0
    let consumedWorkers = 26

    while (countYield >= 100) {
        countDays++
        countSpices += countYield - consumedWorkers
        countYield = countYield - 10
    }
    if (countSpices > 0) {
        countSpices = countSpices - 26
        console.log(countDays);
        console.log(countSpices);
    }
    else {
        console.log(countDays);
        console.log(countSpices);
    }
}
spices(90)