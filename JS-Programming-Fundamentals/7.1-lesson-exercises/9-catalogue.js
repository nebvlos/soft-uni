function catalogue(catalogueData) {

    let catalogueArray = []
    let catalogueObj = {}


    for (let data of catalogueData) {
        [name, price] = data.split(' : ')
        catalogueObj[name] = Number(price)
        catalogueArray.push(catalogueObj)
    }

    let sortedArray = Object.keys(catalogueObj).sort((a, b) => a.localeCompare(b))
    let currentLetter = ''

    for (let i = 0; i < sortedArray.length; i++) {

        let name = sortedArray[i]

        if (currentLetter !== name[0]) {
            currentLetter = name[0]
            console.log(currentLetter);
        }
        console.log(`  ${name}: ${catalogueObj[name]}`);
    }
}

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]

)