function computerStore(array) {
    let typeOfCustomer = array.pop()
    let computerPartPrices = array.slice()
    let tax = 0
    let priceWithoutTax = 0
    let totalPrice = 0


    for (let i = 0; i < computerPartPrices.length; i++) {
        let element = Number(computerPartPrices[i])

        if (element < 0) {
            console.log(`Invalid price!`);
        }
        else if (element > 0) {
            priceWithoutTax += element
        }
    }

    if (priceWithoutTax == 0) {
        console.log(`Invalid order!`);
        return;
    }

    if (typeOfCustomer == 'special') {
        tax = priceWithoutTax * 0.2
        totalPrice = (priceWithoutTax + tax) * 0.9
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${(priceWithoutTax).toFixed(2)}$`);
        console.log(`Taxes: ${(tax).toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${(totalPrice).toFixed(2)}$`);
    }
    else {
        tax = priceWithoutTax * 0.2
        totalPrice = priceWithoutTax + tax
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${(priceWithoutTax).toFixed(2)}$`);
        console.log(`Taxes: ${(tax).toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${(totalPrice).toFixed(2)}$`);
    }
}
computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])
