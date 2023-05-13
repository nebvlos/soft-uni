function login(input) {
    let username = input[0]
    let string = ""
    let count = 0
    for (j = 1; j <= input.length - 1; j++) {
        string = ""
        for (i = username.length - 1; i >= 0; i--) {
            string += username[i] + ""
        }
        if (input[j] !== string) {
            count++
            if (count == 4) {
                console.log(`User ${username} blocked!`);
                return;
            }
            console.log("Incorrect password. Try again.");
        }
        else if (input[j] == string) {
            console.log(`User ${username} logged in.`);
            return;
        }
    }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])