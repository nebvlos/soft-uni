function guineapig(arrayOfPigs) {

    let dayCount = 0
    let consumedFood = 0
    let consumedHay = 0
    let hayLeft = 0
    let foodLeft = 0
    let consumedCover = 0
    let coverSum = 0
    let coverLeft = 0


    for (let i = 0; i < 30; i++) {

        dayCount++
        consumedFood += 0.3
        foodLeft = (Number(arrayOfPigs[0]) - consumedFood)

        if (dayCount % 2 == 0 && dayCount !== 1) {
            consumedHay += foodLeft * 0.05
            hayLeft = Number(arrayOfPigs[1]) - consumedHay
        }

        else if (dayCount % 3 !== 0 && dayCount !== 1) {

            consumedCover = Number(arrayOfPigs[3]) * 1 / 3
            coverSum += consumedCover
            coverLeft = (Number(arrayOfPigs[2]) - coverSum) - consumedCover
        }

        if (coverLeft < 0
            || hayLeft < 0
            || foodLeft < 0) {
            break;
        }

    }

    if (foodLeft > 0
        && coverLeft > 0
        && hayLeft > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodLeft).toFixed(2)}, Hay: ${(hayLeft).toFixed(2)}, Cover: ${(coverLeft).toFixed(2)}.`);
    }
    else {
        console.log(`Merry must go to the pet store!`);
    }
}
guineapig(["10",
    "5",
    "5.2",
    "1"])