function orders(product, quantity) {
    let priceOfProduct = 0
    let totalPrice = 0
    switch (product) {
        case 'water':
            priceOfProduct = 1
            break;
        case 'coffee':
            priceOfProduct = 1.50
            break;
        case 'coke':
            priceOfProduct = 1.40
            break;
        case 'snacks':
            priceOfProduct = 2
            break;
    }
    return totalPrice = (priceOfProduct * quantity).toFixed(2)
    // return totalPrice.toFixed(2)
}
let orderResult = orders("coffee", 2)
console.log(orderResult);