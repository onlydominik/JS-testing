/*let cos = {
  test: 5,
  cos: 3,
};

alert(cos.cos);

// 1
let a = +prompt("A number: ", "");
let b = +prompt("B number: ", "");

alert(a + b);

//2
function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}

alert(`Read: ${readNumber()}`);

//3 random numbers

let newRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

alert(newRandom(5, 10));

let newRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

alert(newRandom(5, 10));
let newRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};


//newest challenges on local folders
//STRING
let ucFirst = function (word) {
  if (!word) {
    let wordNew = prompt("Podaj wyraz: ", "...");
    newWord = wordNew[0].toUpperCase() + wordNew.slice(1);
    alert(newWord);
  } else {
    alert("woaard");
  }
};
//string immutable
let cos = "cos";
cos = "nie";
alert(cos);
ucFirst();

//check for spam
let checkSpam = function (str) {
  str = str.toLowerCase();
  return str.includes("viagra") || str.includes("xxx");
};

alert(checkSpam("cos xxxxx"));

//truncate too long
let truncate = function (str, maxlength) {
  let length = str.length;
  if (length > maxlength) alert((str = str.slice(0, maxlength - 1) + "..."));
  else alert(str);
};

truncate("heeeeeeeejka", 8);

let extractCurrencyValue = function (str) {
  return Number(str.substring(1));
};
alert(extractCurrencyValue("$120") === 120);

alert(0.1 + 0.2 == 0.3);

let testArray = ["Jazz", "Blues"];
testArray.push("Roc-and-Roll");
if (testArray.length % 2 == 1) {
  testArray[testArray.length / 2 - 0.5] = "Classics"; //or Math.floor for removing 0.5 
}
alert(testArray.length % 2 == 1);
alert(testArray[1]);
alert(testArray.shift());
alert(testArray);
testArray.unshift("Rap", "Reggae");
alert(testArray);

function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );

//ARRAY METHODS EXERCISES
let camelize = function (str) {
  let array = str.split(`-`);
  array = array.map((str, index) => {
    if (index > 0) return str[0].toUpperCase() + str.slice(1);
    else return str;
  });
  array = array.join(``);
  alert(array);
};

camelize("cos-jest-tam");

//simplification

let camelize = (str) => {
  return str
    .split(`-`)
    .map((str, index) =>
      index == 0 ? str : str[0].toUpperCase() + str.slice(1)
    )
    .join(``);
};

alert(camelize("cos-jest-tam"));

//next
let arr = [5, 3, 8, 1];

let filterRange = (arr, a, b) => {
  return arr.filter((element) => element >= a && element <= b);
};
alert(filterRange(arr, 1, 4));


//next

let filterRangeInPlace = (arr, a, b) => {
  for (i = 0; i < arr.length; i++) {
    if (!(a <= arr[i] && arr[i] <= b)) {
      arr.splice(i, 1);
      i--;
    }
  }
};

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 2, 4); // removed the numbers except from 1 to 4

alert(arr);

//next
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(arr);

//next
let arr = ["HTML", "JavaScript", "CSS"];

let copySorted = (arr) => {
  let newArr = arr.slice();
  return alert(newArr.sort((a, b) => a.localeCompare(b)));
};

copySorted(arr);

//extendable calculator

let Calculator = function () {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = (str) => {
    let newStr = str.split(" ");
    a = +newStr[0];
    b = +newStr[2];
    op = newStr[1];

    return this.methods[op](a, b);
  };

  this.addMethod = (name, func) => {
    this.methods[name] = func;
  };
};
let cos = new Calculator();

alert(cos.calculate("54 - 24"));
cos.addMethod("*", (a, b) => a * b);
alert(cos.methods["*"]);

//map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let name = users.map((item) => item.name);

alert(name);

//next
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let newArray = users.map((item) => ({
  fullName: `${item.name} ${item.surname}`,
  id: `${item.id}`,
}));

alert(newArray[0].fullName);

//sort by age
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

let sortByAge = (arr) => {
  arr.sort((a, b) => a.age - b.age);
};

sortByAge(arr);
alert(arr[0].name);

//shuffle an array
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let array = [1, 2, 3];
let shuffle = (array) => {
  return array.map((item, index) => (item[index] = getRandomInt(array.length)));
};

//next
let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

let unique = (arr) => {
  let newArray = [];
  for (let item of arr) {
    if (!newArray.includes(item)) newArray.push(item);
  }
  return newArray;
};

alert(unique(strings));

//next
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}
let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
alert(usersById.john.id);

//Filter unique array members

function unique(arr) {
  return Array.from(new Set(arr));
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    let wordNormalized = word.toLowerCase().split("").sort().join("");

    map.set(wordNormalized, word);
  }
  return Array.from(map.values());
}

alert(aclean(arr));

//new problem to solve

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
keys.push("Cos");
alert(keys);

//weak map
let visitsCountMap = new Map();
user = {};
function countUser(user) {
  console.log(visitsCountMap.get(user));
}
countUser(user);

//object manipulation
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let value of Object.values(salaries)) {
    sum += value;
  }
  return sum;
}

alert(sumSalaries(salaries));


//count properties
let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  let count = 0;
  for (let prop of Object.entries(obj)) {
    count++;
  }
  return count;
}

alert(count(user)); // 2

//or short
let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.entries(obj).length;
}
alert(count(user)); // 2


//desctructuring
let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false

//next
let salaries = {};

function topSalary(salaries) {
  maxSalary = 0;
  maxName = undefined;

  for (let [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  alert(maxName);
}

topSalary(salaries);

//date
let d1 = new Date(2012, 1, 20, 3, 12);
alert(d1);

let d2 = new Date("2012-02-20T03:12");
alert( d2 );

function getWeekDay(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 Jan 2012
alert(getWeekDay(date));
alert(date.getDay());

// next
let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
  return new Date(date.getTime() - days * 86400000);
}

alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)

//or
let date = new Date(2015, 0, 2);
function getDateAgo(date, days) {
  dateClone = new Date(date);

  dateClone.setDate(dateClone.getDate() - days);
  return dateClone.getDate();
}

alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)

//next

function getSecondsToday() {
  let date = new Date();
  let datakopia = new Date();
  let nowa = new Date(datakopia.setHours(2));
  alert(date.getHours() * 3600);
}

getSecondsToday();

//JSON TASKS
let user = {
  name: "John",
  age: 30,

  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  },

  cos() {
    return "cos";
  },
};

alert(user.cos()); // {name: "John", age: 30}

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);

//task

let user = {
  name: "John Smith",
  age: 35,
};

let jsonParse = JSON.parse(JSON.stringify(user));
alert(jsonParse); //object

//next

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

let cos = JSON.stringify(meetup, function replacer(key, value) {
  if (key && value == meetup) return key;
  return value;
});

console.log(cos);


//recursive

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

let cos = JSON.stringify(meetup, function replacer(key, value) {
  if (key && value == meetup) return key;
  return value;
});

console.log(cos);

//new exercises on website

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

let cos = JSON.stringify(meetup, function replacer(key, value) {
  if (key && value == meetup) return key;
  return value;
});

console.log(cos);

//new exercises on website

function sumTo(n) {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += i;
  }
  return sum;
}

alert(sumTo(4));

//recursion

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

alert( sumTo(100) );


function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

alert(factorial(5));

//DOM js children
let div1 = document.body.firstChild;
alert(div1);

let ul1 = document.body.children[1];

let li1 = document.body.children[1].children[1];
li1.style.background = "red";
*/
//color table cell

let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.background = "red";
}
