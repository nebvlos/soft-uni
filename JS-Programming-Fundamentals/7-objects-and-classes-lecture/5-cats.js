function cats(catData) {
    let catName = ''
    let catAge = 0

    class Cat {
        constructor(catName, catAge) {
            this.name = catName
            this.age = catAge
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < catData.length; i++) {
        let element = catData[i].split(' ')
        catName = element[0]
        catAge = element[1]

        let cat = new Cat(catName, catAge)
        cat.meow()
    }
}
cats(['Mellow 2', 'Tom 5'])