function listOfProducts(arrayOfStrings) {
    arrayOfStrings.sort((a, b) => a.localeCompare(b))
    let listNumber = 0
    for (let i = 0; i < arrayOfStrings.length; i++) {
        listNumber = i + 1
        console.log(`${listNumber}. ${arrayOfStrings[i]}`);
    }

}
listOfProducts(['Watermelon', 'Banana', 'Apples'])