function palindromeInt(arrayOfNums) {
    let turnStringToArray = stringToArray(arrayOfNums)
    let reversedNumbers = reverseNums(arrayOfNums)
    let checkIfPalind = checkIfPalindrome()


    function checkIfPalindrome() {
        let boolean = true
        for (let i = 0; i < turnStringToArray.length; i++) {
            if (turnStringToArray[i] == reversedNumbers[i]) {
                boolean = true
            }
            else {
                boolean = false
            }
            console.log(boolean);
        }
    }

    function stringToArray(arrayOfNums) {
        let stringOfArray = arrayOfNums.join().split(',')
        return stringOfArray
    }

    function reverseNums() {
        let reversedArray = []
        let reversedNumber = ''
        for (let i = 0; i < turnStringToArray.length; i++) {
            let currentNumber = turnStringToArray[i]
            for (let j = currentNumber.length - 1; j >= 0; j--) {
                reversedNumber += currentNumber[j]
            }
            reversedArray[i] = reversedNumber
            reversedNumber = ''
        }
        return reversedArray;
    }
}
palindromeInt([32, 2, 232, 1010])