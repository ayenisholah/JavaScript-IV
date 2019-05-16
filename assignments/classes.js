//====== Class Challenge! =======//
// 1- Create a Vehicle pseudoclass that has a method of info().
// 2- Create a Car pseudoclass that inherets Vehicle. Add a method of drive(). Add some relevant properties.
// 3- Create a Tesla pseudoclass that inherets Car. Add some relevant properties.
// 4- Create a Truck pseudoclass that inherets Vehicle. Add some relevant properties.

class Vehicle {
    constructor(attributes) {
        this.type = attributes.type;
        this.engineSize = attributes.engineSize;
        this.registration = attributes.registration;
    }

    info() {
        return `This ${this.type} registration ${this.registration} has an engine size of ${this.engineSize}`;
    }
}

class Car extends Vehicle {
    constructor(attributes) {
        super(attributes);
        this.doors = attributes.doors;
        this.color = attributes.color;
        this.model = attributes.model;
    }

    drive() {
        return ` We love the ${this.doors} door ${this.model} in ${this.color}`;
    }
}

class Tesla extends Car {
    constructor(attributes) {
        super(attributes);
        this.powerSource = attributes.powerSource;
        this.imports = attributes.imports;
    }
}

class Truck extends Vehicle {
    constructor(attributes) {
        super(attributes);
        this.capacity = attributes.capacity;
    }
    towes(name, age, something) {
        return `${name} ${age} ${something}`;
    }
}

const volvoHGV = new Truck({
    type: "Big Lorry",
    engineSize: "5L",
    registration: "789012",
    capacity: "Really Big"
});
  

const model3 = new Tesla({
    type: "Fancy Car",
    engineSize: null,
    registration: "123456",
    doors: 4,
    color: "Red",
    model: "Model 3",
    powerSource: "Battery",
    imports: true,
});

console.log(model3, volvoHGV.towes.apply(model3, ["Hello", "d", "dkjdk"]));