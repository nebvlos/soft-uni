function equalArrays(arrString1, arrString2) {
    let check = ''
    let sum = 0
    let difference = 0
    for (let i = 0; i < arrString1.length; i++) {
        check = arrString2[i]
        if (check == arrString1[i]) {
            sum += Number(arrString1[i])
            if (i + 1 == arrString1.length) {
                console.log(`Arrays are identical. Sum: ${sum}`);
            }
        }
        else {
            difference = i
            console.log(`Arrays are not identical. Found difference at ${difference} index`);
            break;
        }
    }
}

equalArrays(['1'], ['10'])