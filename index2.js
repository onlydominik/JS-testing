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
*/
//challenge 3
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
