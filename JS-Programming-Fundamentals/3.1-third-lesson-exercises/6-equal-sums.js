function equalSums(arr) {
    let sum = 0
    let sumLeft = 0
    let sumRight = 0

    if (arr.length == 1) {
        console.log(0);
    }
    else if (arr.length == 2) {
        console.log('no');
        return;
    }
    else if (arr.length > 2) {
        for (let i = 1; i < arr.length; i++) {
            for (let k = i; k > 0; k--) {
                sumLeft += arr[k - 1]
            }
            for (let j = i; j < arr.length - 1; j++) {
                sum += arr[j + 1]
                sumRight = sum
            }
            if (sumLeft == sumRight) {
                console.log(i);
                break;
            }
            sumLeft = 0
            sumRight = 0
            sum = 0
        }
        if (sumLeft == 0 && sumRight == 0) {
            console.log('no');
        }
    }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])