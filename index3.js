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

//closure
function makeCounter() {
  let count = 1;

  return function () {
    return count++;
  };
}

let counter = makeCounter();

alert(counter());
alert(counter());
alert(counter());

function f() {
  let value = Math.random();

  return function () {
    alert(value);
    value++;
  };
}

// 3 functions in array, every one of them links to Lexical Environment
// from the corresponding f() run
let cos = f();
alert(cos());
alert(cos());
alert(cos());


function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };

  this.down = function () {
    return --count;
  };

  return function () {
    return ++count;
  };
}
alert(Counter()); // 1

alert(Counter.down()); // 1

//sum with closure

function sum(a) {
  return function (b) {
    return a + b;
  };
}

alert(sum(5)(5));

//filter through function

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) );


function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}


let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inArray([1, 2, 10])) ); // 1,2


//sort with enclosure
function byField(field) {
  return function (a, b) {
    return a[field] > b[field] ? 1 : -1;
  };
}
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

users.sort(byField("name"));
users.sort(byField("age"));

alert(users);

let div = document.querySelector("div");

// replace div.outerHTML with <p>...</p>
div.innerHTML = "<p>A new element</p>"; // (*)


for (let li of document.querySelectorAll("li")) {
  let title = li.firstChild.data;
}


let input = document.querySelector("input");
alert(input.id);
// attribute => property
input.setAttribute("id", "id");
alert(input.id); // id (updated)

// property => attribute
input.id = "newId";
alert(input.getAttribute("id")); // newId (updated)


//create a list
let ul = document.createElement("ul");
document.body.append(ul);

while (true) {
  let userText = prompt("Podaj jakąś wartość");

  if (!userText) break;

  let li = document.createElement("li");
  li.textContent = userText;
  ul.append(li);
}
 showNotification({
    top: 10, // 10px from the top of the window (by default 0px)
    right: 10, // 10px from the right edge of the window (by default 0px)
    html: "Hello!", // the HTML of notification
    className: "welcome", // an additional class for the div (optional)
  });




function showNotification(options) {
  let div = document.createElement("div");
  div.className = "notification";
  if (className) {
    notification.classList.add(className);
  }
  document.body.append(div);
}

showNotification();

//https://swimyoung.github.io/web-coordinates/ nice link with good width/height

//https://swimyoung.github.io/web-coordinates/ nice link with good width/height

let button = document.createElement("button");
let div = document.querySelector(".hide");
button.textContent = "Kliknij!";

document.body.append(button);

button.addEventListener("click", hideElem(div));

function hideElem(elem) {
  elem.style.display = "none";
}


function move() {}

let ball = document.querySelector("#ball");
alert(ball.getBoundingClientRect().left);

alert(ball.getBoundingClientRect().left);

let field = document.querySelector("#field");

function coordinates(event) {
  let fieldCoords = this.getBoundingClientRect();
  let ballWidth = ball.offsetWidth;
  let ballHeight = ball.offsetHeight;

  let ballCoords = {
    top: event.clientY - fieldCoords.top - field.clientTop - ballHeight / 2,
    left: event.clientX - fieldCoords.left - field.clientLeft - ballWidth / 2,
  };

  if (ballCoords.left < 0) ballCoords.left = 0;
  if (ballCoords.top < 0) ballCoords.top = 0;

  if (ballCoords.top + ball.clientHeight > field.clientHeight)
    ballCoords.top = field.clientHeight - ball.clientHeight;

  if (ballCoords.left + ball.clientWidth > field.clientWidth)
    ballCoords.left = field.clientWidth - ball.clientWidth;

  ball.style.left = ballCoords.left + "px";
  ball.style.top = ballCoords.top + "px";
}

field.addEventListener("click", coordinates);


let menu = document.querySelector(".menu");

menu.onclick = function () {
  menu.classList.toggle("open");
};


let articles = document.querySelectorAll(".articles .articles-item");

for (let item of articles) {
  item.querySelector(".close-button").onclick = function () {
    item.remove();
  };
}


document.querySelector(".articles").onclick = function (event) {
  if (event.target.className != "close-button") return;

  event.target.closest(".articles-item").remove();
};


document.querySelector(".tree").onclick = function (event) {
  if (event.target.tagName != "SPAN") return;

  let elem = event.target.parentElement.children[1];

  if (elem.hidden) return (elem.hidden = false);
  elem.hidden = true;
};


document.querySelector("#grid").onclick = function (event) {
  if (event.target.tagName != "TH") return;

  let th = event.target;

  sortGrid(th.cellIndex, th.dataset.type);
};

function sortGrid(colNum, type) {
  let tbody = grid.querySelector("tbody");
  let arrayRows = Array.from(tbody.rows);

  alert(arrayRows);

  let compare;
  switch (type) {
    case "number":
      compare = function (a, b) {
        return a.cells[colNum].innerHTML - b.cells[colNum].innerHTML;
      };
      break;

    case "string":
      compare = function (rowA, rowB) {
        alert(colNum);
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
          ? 1
          : -1;
      };
      break;
  }

  arrayRows.sort(compare);

  tbody.append(...arrayRows);
}


//Tooltip button elem
let tooltipElem = document.createElement("div");

document.onmouseover = function (event) {
  if (event.target.tagName != "BUTTON") return;

  tooltipElem.innerHTML = event.target.dataset.tooltip;
  let buttonOutHeight = document
    .querySelector("button")
    .getBoundingClientRect();

  event.target.prepend(tooltipElem);

  tooltipElem.style.top = -tooltipElem.offsetHeight - 10 + "px";

  if (tooltipElem.offsetHeight + 10 > buttonOutHeight.top)
    tooltipElem.style.top = event.target.offsetHeight + 10 + "px";
};

document.onmouseout = function (event) {
  if (event.target.tagName != "BUTTON") return;
  tooltipElem.remove();
};

//confrim and default prevent
contents.onclick = function (event) {
  let target = event.target.closest("a");

  function handleConfirm() {
    let cos = confirm("Leave for " + target.getAttribute("href") + "?");
    if (!cos) event.preventDefault();
  }
  if (target && contents.contains(target)) {
    handleConfirm();
  }
};


thumbs.onclick = function (event) {
  if (!event.target.closest("a")) return;
  largeImg.src = event.target.closest("a").href;
  if (event.target.closest("a")) return false;
};

//selecting items with and without pressed button
document.onclick = function (event) {
  if (event.target.tagName != "LI") return false;
  event.target.onmousedown = function () {
    return false;
  };
  let lis = ul.querySelectorAll("li");

  if (event.ctrlKey || event.metaKey) {
    event.target.classList.toggle("green");
    return;
  }
  for (let li of lis) {
    if (li.classList.contains("green")) {
      li.classList.remove("green");
    }
  }
  event.target.classList.add("green");
};

 let divek = document.createElement("div");

let currentElem = null;

house.onmouseover = function (event) {
  console.log(event.relatedTarget);
  if (currentElem) return;

  let target = event.target.closest("[data-tooltip]");

  if (!target) return;

  currentElem = target;
  onEnter(currentElem);

  console.log(event.target.getAttribute("data-tooltip") + "ENTER");
};

house.onmouseout = function (event) {
  if (!currentElem) return;

  let relatedTarget = event.relatedTarget;

  while (relatedTarget) {
    if (relatedTarget == currentElem) return;

    relatedTarget = relatedTarget.parentNode;
  }
  onLeave(currentElem);
  currentElem = null;

  console.log(event.target.getAttribute("data-tooltip") + "OUT");
};

function onEnter(elem) {
  divek.classList.add("tooltip");
  divek.innerHTML = elem.getAttribute("data-tooltip");
  elem.append(divek);
}

function onLeave(elem) {
  divek.remove();
}

function populate() {
  while (true) {
    // document bottom
    let windowRelativeBottom =
      document.documentElement.getBoundingClientRect().bottom;

    // if the user hasn't scrolled far enough (>100px to the end)
    if (windowRelativeBottom > document.documentElement.clientHeight + 100)
      break;

    // let's add more data
    document.body.insertAdjacentHTML("beforeend", `<p>Date: ${new Date()}</p>`);
  }
}

populate();


let elem2 = document.getElementById("matrix");
let elem = document.getElementById("arrowTop");

elem.addEventListener("click", function () {
  console.log(document.documentElement.clientHeight);
  console.log(window.pageYOffset);
  document.documentElement.scrollTop = 0;
});
window.addEventListener("scroll", function () {
  if (window.pageYOffset > document.documentElement.clientHeight) {
    elem.style.display = "block";
  } else elem.style.display = "none";
});

let newElem = new Option("Classic", "classic", true, true);

document.getElementById("genres").appendChild(newElem);

let btn = document.getElementById("nowy");
btn.addEventListener("click", function () {
  for (elem of genres) {
    if (elem.selected == true) alert(elem.text);

  }
});

let oneDiv = document.getElementById("view");
let textArea = null;

oneDiv.onclick = function () {
  textArea = document.createElement("textarea");
  textArea.className = "edit";
  textArea.value = oneDiv.innerHTML;

  textArea.onkeydown = function (event) {
    if (event.key == "Enter") {
      this.blur();
    }
  };
  textArea.onblur = function () {
    textArea.replaceWith(oneDiv);
    oneDiv.innerHTML = textArea.value;
  };
  oneDiv.replaceWith(textArea);
  textArea.focus();
};
 clicked.innerHTML = textArea.value;

    textArea.replaceWith(clicked);



let table = document.getElementById("bagua-table");
let clicked = null;
table.onclick = function (event) {
  let target = event.target;
  let textArea = document.createElement("textarea");
  textArea.style.width = target.clientWidth + "px";

  target.style.padding = 0;
  target.style.margin = 0;
  target.style.border = "none";
  textArea.style.height = target.clientHeight + "px";
  textArea.classList.add("textArea");
  let btn1 = document.createElement("button");
  let btn2 = document.createElement("button");
  btn1.innerHTML = "OK";
  btn2.innerHTML = "Cancel";
  btn1.classList.add("btn");
  btn2.classList.add("btn");
  textArea.value = target.innerHTML;
  if (target.tagName != "TD") return;
  clicked = target;

  clicked.innerHTML = "";
  clicked.appendChild(textArea);
  textArea.focus();
};
