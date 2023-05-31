function storeProvision(inStock, outOfStock) {
    let food = ''
    let count = 0
    let obj = {}

    addProduct(inStock)
    addProduct(outOfStock)

    function addProduct(data) {
        for (let i = 0; i < data.length; i += 2) {
            food = data[i]
            count = Number(data[i + 1])

            if (obj.hasOwnProperty(food)) {
                obj[food] += count
            }
            else {
                obj[food] = count
            }
        }
    }

    for (let product of Object.keys(obj)) {
        console.log(`${product} -> ${obj[product]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)