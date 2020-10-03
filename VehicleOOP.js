// Kaitlin Berryman
// Springboard

// create class Vehicle
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return 'Beep.';
  }

  toString() {
    const {make, model, year} = this;
    return `The vehicle is a ${make} ${model} from ${year}`;
  }
}

// test class Vehicle
let myVehicle = new Vehicle("Honda", "Monster Truck", 1999);
console.log(myVehicle.honk());      // Beep.
console.log(myVehicle.toString());  // The vehicle is a Honda Monster Truck from 1999

// create class Car
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

// test class Car
let myCar = new Car("Toyota", "Corolla", 2005);
console.log(myCar.toString()); // The vehicle is a Toyota Corolla from 2005.
console.log(myCar.honk());     // Beep.
console.log(myCar.numWheels);  // 4

// create class Motorcycle
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }

  revEngine() {
    return 'VROOM!!!';
  }
}

// test class Motorcycle
let myMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
console.log(myMotorcycle.toString());  // The vehicle is a Honda Nighthawk from 2000.
console.log(myMotorcycle.honk());      // Beep.
console.log(myMotorcycle.revEngine()); // VROOM!!!
console.log(myMotorcycle.numWheels);   // 2

// create class Garage
class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }

  add(newVehicle) {
    if(!(newVehicle instanceof Vehicle)) {
      throw new Error('Only vehicles are allowed in here!');
    }

    else if(this.vehicles.length >= capacity) {
      throw new Error('Sorry, we\'re full');
    }

    this.vehicles.push(newVehicle);
    return 'Vehicle added!';
  }
}

// test class Garage
let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."
