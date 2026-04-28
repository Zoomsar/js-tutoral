class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`${this.name} is moving at a speed of ${speed} km/h!`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        super.move(this.runSpeed);
    }
}

class Dog extends Animal {
    constructor(name, age, barkVolume) {
        super(name, age);
        this.barkVolume = barkVolume;
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        super.move(this.swimSpeed);
    }
}

const rabbit = new Rabbit("Bugs Bunny", 5, 20);
const dog = new Dog("Snoopy", 3, 10);
const fish = new Fish("Nemo", 1, 5);

console.log(rabbit);
console.log(dog);
console.log(fish);

rabbit.run();
fish.swim();
