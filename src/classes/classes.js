class Vehicle {
    name;
    #price;
    static stat = true;
    static examples = [];

    constructor(name, price) {
        this.name = name;
        this.#price = price;
        Vehicle.examples.push(this);
    }

    getPrice() {
        return this.#price;
    }

    setPrice(newPrice) {
        this.#price = newPrice;
    }

    calculateAmount(amount) {
        return amount * this.#price;
    }

    getTwoPlusTwo() {
        return 4;
    }

}

class Car extends Vehicle {
    #type;

    static types = [
        'hatchback',
        'sedan',
        'off-road'
    ];

    constructor(name, price, type) {
        super(name, price);

        this.#type = type;

    }

}

class Bike extends Vehicle {
    #type;

    static types = [
        'hatchback',
        'sedan',
        'off-road'
    ];

    constructor(name, price, type) {
        super(name, price);

        this.#type = type;

    }

}
function doSmth(smth) {
    console.log(smth);
}


class Account {
    #card;
    #pin;
    #bank;

    static banks = ['1', '2', '3'];
    static examples = []

    constructor(card, pin, bank) {
        this.#pin = pin;
        this.#bank = bank;
        this.#card = card;

        Account.examples.push(this);
    }


}

const children = [
    Car,
    Bike
]
function getOnlyCars() {
    //...   instance
    return Vehicle.examples.filter(example =>  example instanceof Vehicle && children.some(child => !(example instanceof child)))
}

// debugger;
const audi = new Car('audi', 50000, 'hatchback');
const bmw = new Bike('bmw', 100000, 'hatchback');
const skoda = new Car('skoda', 30000, 'hatchback');
const vehicle = new Vehicle('vehicle', 'priceless');
console.dir(audi);
const bank = '11';
const Denys = Account.banks.filter(item => item === bank).length && new Account('2367 4637 2908 4738', '1111', bank);
// const test = null && 0;
/*audi.setPrice(70000);
console.log(audi.getPrice());
console.log(Vehicle.examples);

console.log(Denys);
console.log(Account.examples);*/

// console.log(audi.calculateAmount(3));
