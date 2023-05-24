function lastKNumbers(n, k) {
    let result = []
    result.push(1)

    for (let i = 0; i < n - 1; i++) {
        let sum = 0
        let lastKElements = result.slice(- k)

        for (let j = 0; j < lastKElements.length; j++) {
            sum += lastKElements[j]
        }
        result.push(sum)
    }

    console.log(result.join(' '));
}
lastKNumbers(8, 2)