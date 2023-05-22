function passwordValidator(password) {

    let correctLengthChecker = checkIfCorrectLength(password)
    let correctSpellChecker = ifOnlyLettersAndDigits(password)
    let twoDigitsChecker = digitCheck(password)
    let resultChecker = resultCheck()
    return resultChecker


    function resultCheck() {
        let contain = ''
        if (correctLengthChecker == false) {
            contain += 'Password must be between 6 and 10 characters\n';
        }
        if (correctSpellChecker == false) {
            contain += 'Password must consist only of letters and digits\n';
        }
        if (twoDigitsChecker == false) {
            contain += 'Password must have at least 2 digits\n';
        }
        else if (twoDigitsChecker == true &&
            correctSpellChecker == true &&
            correctLengthChecker == true) {

            contain += 'Password is valid\n';
        }
        return contain
    }


    function checkIfCorrectLength(password) {
        let boolean = true

        if (password.length >= 6 && password.length <= 10) {
            boolean = true
        }
        else {
            boolean = false
        }
        return boolean
    }


    function ifOnlyLettersAndDigits(password) {
        let trueOrFalse = true

        for (let i = 0; i < password.length; i++) {
            if (/[0-9]/.test(password[i]) == true
                || /[A-Z]/.test(password[i]) == true
                || /[a-z]/.test(password[i]) == true) {

                trueOrFalse = true
            }
            else {
                trueOrFalse = false
                break;
            }
        }
        return trueOrFalse
    }


    function digitCheck(password) {
        let trueFalse = true
        let regex = /\d/
        let count = 0

        for (let i = 0; i < password.length; i++) {
            if (regex.test(password[i]) == true) {
                count++
                if (count >= 2) {
                    trueFalse = true
                    break;
                }
                else {
                    trueFalse = false
                }
            }
            else {
                trueFalse = false
            }
        }
        return trueFalse
    }
}

console.log(passwordValidator('logIn'))