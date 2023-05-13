function pyramid(base, height) {
    let stone = 0
    let countStone = 0
    let marble = 0
    let gold = 0
    let countMarble = 0
    let lapisLazuli = 0
    let countLapisLazuli = 0
    let steps = 0

    for (i = base; i >= 1; i -= 2) {
        steps++
        if (i <= 2) {
            gold = (i * i) * height
            break;
        }
        if (steps % 5 !== 0) {
            stone = ((i - 2) * (i - 2)) * height
            countStone += stone
            marble = ((4 * i) - 4) * height
            countMarble += marble
        }

        else if (steps % 5 === 0) {
            lapisLazuli = ((4 * i) - 4) * height
            countLapisLazuli += lapisLazuli
            stone = ((i - 2) * (i - 2)) * height
            countStone += stone
        }
    }
    pyramidHeight = height * steps

    console.log(`Stone required: ${Math.ceil(countStone)}`);
    console.log(`Marble required: ${Math.ceil(countMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(countLapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}
pyramid(23, 0.5)