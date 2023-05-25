function sortByTwoCriteria(arrayOfStrings) {
    let sortedArray = arrayOfStrings.sort((a, b) => a.length - b.length || a.localeCompare(b)
    )
    console.log(sortedArray.join('\n'));
}
sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])