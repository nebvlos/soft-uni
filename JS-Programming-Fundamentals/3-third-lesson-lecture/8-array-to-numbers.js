function solve(arr) {
    let condensed = []

    while (arr.length >= 2) {
        for (i = 0; i < arr.length; i++) {
            if (i != arr.length - 1) {
                condensed[i] = arr[i] + arr[i + 1]
            }
        }
        arr = condensed
        condensed = []
    }

    console.log(arr[0]);
}
solve([5])