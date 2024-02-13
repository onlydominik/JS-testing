// function wiadomosc(from, text = "nic nie podales") {
//   alert(from + ": " + text);
// }

// let user = {
//   name: "Dominik",
//   old: 45,
// };
// wiadomosc("Dominik", "dzien dobry");
// user.name = prompt("Podaj imie", user.name);

// alert(user.name);
/*
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

<<<<<<< HEAD
let user = makeUser("John", 30);
alert(user.name); // John

let obj = {
  0: "test", // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert(obj["0"]); // test
alert(obj[0]); // test (same property)

let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let cos in user) {
  // keys
  alert(cos); // name, age, isAdmin
  // values for the keys
  alert(user[key]); // John, 30, true
}

//challenge 1
let user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
alert(user.name);
delete user.name;
alert(user.name);
alert("name" in user);

//challenge 2

let schedule = {
  name: "Dominik",
};
function isEmpty(obj) {
  let i = 0;
  for (let prop in obj) {
    i++;
  }
  if (i == 0) alert("Nic nie ma");
  else alert("Cos jest");
}

isEmpty(schedule);

//sumowanie
let schedule = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function isEmpty(obj) {
  let sum = 0;
  for (let key in obj) {
    sum = sum + obj[key];
  }
  return sum;
}
alert(isEmpty(schedule));
*/
//challenge 3
let numbers = {
  one: 2,
  two: 5,
  three: 4,
};
function multiplyNumeric(obj) {
  for (let prop in obj) {
    obj[prop] *= 2;
  }
}
multiplyNumeric(numbers);
for (let prop in numbers) {
  alert(numbers[prop]);
}
=======
wiadomosc("Dominik", "dzien dobry");

function wiadomosc(from, text = "nic nie podales") {
  alert(from + ": " + text);
}

wiadomosc("Dominik", "dzien dobry");
>>>>>>> a97d082e5b6c2ff9698f841f8a09c5fba7647f68
