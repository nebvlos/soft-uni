function distinctArray(arrayOfNums) {
    let modifiedArr = arrayOfNums.filter((item, index) => arrayOfNums.indexOf(item) == index)
    console.log(modifiedArr.join(' '));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])