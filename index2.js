//challenge 1
/*
let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//challenge 2
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    // shows the current step
    alert(this.step);
  },
};
ladder.up().up().down().showStep().down().showStep();

//challenge 34
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    // shows the current step
    alert(this.step);
  },
};
ladder.up().up().down().showStep().down().showStep();

//NEW CHALLENGE NEW FILE

function Car(brand, model, km) {
  this.brand = brand;
  this.model = model;
  this.km = km;
}

let ford1 = new Car("Ford", "Mondeo", "120KM");

alert(ford1.brand + ford1.model + ford1.km);
 let cos = {};
function A() {
  return cos;
}
function B() {
  return cos;
}

let a = new A();
let b = new B();
alert(new A() == new B()); // true
alert(a == b); // true


let Calculator = function () {
  this.read = function () {
    this.a = prompt("Liczba a:", 0);
    this.b = prompt("Liczba a:", 0);
  };

  this.sum = function () {
    return +this.a + +this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
};

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


//NEW
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.newValue = +prompt("Number: ", 0);
    return (this.value += this.newValue);
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values

//NEW SYMBOL
let id = Symbol("id");

let obj = {
  name: "John",
  id: 123, // not "id": 123
};

// using object as a property key
// output

let anotherObj = {};
anotherObj[obj] = obj;
alert(anotherObj[obj]);
let numer = Number(obj);
alert(numer);
*/
//OBJECT CONVERTING

let obj = {
  num: 123,
};

let numZbazy = Number(obj);
let numZbazy2 = +obj;
alert(obj[Symbol.toPrimitive]("cos"));
