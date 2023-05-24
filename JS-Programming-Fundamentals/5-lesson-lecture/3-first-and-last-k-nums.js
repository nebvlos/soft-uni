function firstAndLastNums(arrayOfNums) {
    // 2 ways to solve the exercise 
    // let k = arrayOfNums[0]
    // let firstNumbersArray = []
    // let lasttNumbersArray = []
    // let count = 0

    // for (let i = 1; i <= k; i++){
    //     firstNumbersArray.push(arrayOfNums[i])
    // }
    // for (let i = arrayOfNums.length - 1; i >= 0; i--){
    //     lasttNumbersArray.unshift(arrayOfNums[i])
    //     count++
    //     if (count == k){
    //         break;
    //     }
    // }
    // console.log(firstNumbersArray);
    // console.log(lasttNumbersArray);

    let k = arrayOfNums.shift()

    let firstKNums = arrayOfNums.slice(0, k)
    let lastKNums = arrayOfNums.slice(arrayOfNums.length - k)
    console.log(firstKNums);
    console.log(lastKNums);

}
firstAndLastNums([3,
    6, 7, 8, 9])