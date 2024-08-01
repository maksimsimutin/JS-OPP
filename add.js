class Car {
  constructor(model, mark, country, speed) {
    this.model = model;
    this.mark = mark;
    this.country = country;
    this.speed = speed;
  }

  increaseSpeed(value) {
    this.speed += value;
  }

  decreaseSpeed(value) {
    this.speed -= value;
  }
}

class Truck extends Car {
  constructor(model, mark, country, speed) {
    super(model, mark, country, speed);
  }

  takeWeight(weight) {
    console.log(`Грузовик ${this.mark} ${this.model} взял ${weight} кг`);
  }
}

class Bus extends Car {
  constructor(model, mark, country, speed) {
    super(model, mark, country, speed);
  }

  takePeople(people) {
    console.log(`Автобус ${this.mark} ${this.model} взял ${people} человек`);
  }
}

class Transporter extends Car {
  constructor(model, mark, country, speed) {
    super(model, mark, country, speed);
  }

  takeCars(cars) {
    console.log(`Транспортер ${this.mark} ${this.model} взял ${cars} машин`);
  }
}

const truck = new Truck("Volvo", "FH16", "Швеция", 100);
truck.increaseSpeed(20);
truck.takeWeight(5000);

const bus = new Bus("Mercedes", "Tourismo", "Германия", 120);
bus.decreaseSpeed(10);
bus.takePeople(50);

const transporter = new Transporter("Scania", "R730", "Швеция", 150);
transporter.increaseSpeed(30);
transporter.takeCars(5);

console.log(truck);
console.log(bus);
console.log(transporter);
