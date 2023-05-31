class Storage {
    constructor(capacity) {
        this.capacity = capacity
        this.storage = []
        this.totalCost = 0
    }

    addProduct(product) {
        this.storage.push(product)
        this.capacity -= product.quantity
        let sum = 0
        sum = (product.price) * (product.quantity)
        this.totalCost += sum
    }
    getProducts() {
        return this.storage.map(x => JSON.stringify(x)).join('\n')

    }
}

let productOne = { name: 'Tomato', price: 0.90, quantity: 19 };
let productTwo = { name: 'Potato', price: 1.10, quantity: 10 };
let storage = new Storage(30);
storage.addProduct(productOne);
storage.addProduct(productTwo);
console.log(storage.totalCost);