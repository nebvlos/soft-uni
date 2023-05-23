function carWash(commands) {
    let result = 0
    let soap = addSoap(commands)
    let value = resultOfArray(commands)
    console.log(`The car is ${(value).toFixed(2)}% clean.`);

    function addSoap(commands) {
        if (commands.includes('soap')) {
            valueSoap = 10
        }
        return valueSoap
    }

    function resultOfArray(commands) {
        for (let i = 0; i < commands.length; i++) {
            let command = commands[i]
            switch (command) {
                case 'soap':
                    result += soap
                    break;
                case 'water':
                    result = result * 1.2
                    break;
                case 'vacuum cleaner':
                    result = result * 1.25
                    break;
                case 'mud':
                    result -= result * 0.1
                    break;
            }
        }
        return result
    }
}
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])