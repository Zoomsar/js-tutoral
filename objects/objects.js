const sponge = {
    name: "Spongebob",
    lastname: "Squarebob",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log(`Are you feeling it nooow Mr.Krabs? ;) by ${this.name}`)},
    eat: () => console.log("I am eating Mr.Krabs!")
}

console.log(sponge.age)
sponge.sayHello();
sponge.eat();
console.log();

// constructors
function Car(mark, model, year, color) {
    this.mark = mark,
    this.model = model,
    this.year = year,
    this.coolColor = color
    this.drive = function(){console.log(`You are driving da ${this.model}!!!`)}
}

const car1 = new Car("Ford", "Mustaaaaard", 2000, "yellow");
console.log(car1);
console.log(car1.coolColor);
car1.drive();
console.log();

// classes
class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`)
        console.log(`Price: ${this.price}€`)
    }

    calcTotal(){
        return this.price + (this.price * tax)
    }
}

const tax = 0.22; // 22% KM
const prod1 = new Product("Squidward destroyer 9000", 19999.99);
prod1.displayProduct();
console.log(`Including tax: ${(prod1.calcTotal()).toFixed(2)};`);
console.log();

// static
class MathUtil {
    static PI = 3.14;

    static getDM(radius) {
        return radius * 2;
    }

    static getC(radius) {
        return 2 * radius * this.PI;
    }

    static getArea(radius) {
        return this.PI * Math.pow(radius, 2);
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDM(10) + " cm");
console.log(MathUtil.getC(10) + " cm");
console.log(MathUtil.getArea(10) + " cm²");
