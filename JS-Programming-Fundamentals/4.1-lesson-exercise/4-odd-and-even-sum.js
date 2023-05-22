function oddAndEvenSum(num) {
    let resultEvenSums = evenSums(num)
    let resultOddSums = oddSums(num)

    console.log(`Odd sum = ${resultOddSums}, Even sum = ${resultEvenSums}`);
    function evenSums(num) {
        let stringOfNum = num + ''
        let arrayOfNum = []
        let sumEven = 0

        for (let i = 0; i < stringOfNum.length; i++) {
            arrayOfNum[i] = stringOfNum[i]

            if (arrayOfNum[i] % 2 == 0) {
                sumEven += Number(arrayOfNum[i])
            }
        }
        return sumEven
    }

    function oddSums(num) {
        let stringOfNum = num + ''
        let arrayOfNum = []
        let sumOdd = 0

        for (let i = 0; i < stringOfNum.length; i++) {
            arrayOfNum[i] = stringOfNum[i]

            if (arrayOfNum[i] % 2 !== 0) {
                sumOdd += Number(arrayOfNum[i])
            }
        }
        return sumOdd
    }
}
oddAndEvenSum(3495892137259234)