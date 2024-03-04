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
*/
//next
let arr = [5, 3, 8, 1];

let filterRange = (arr, a, b) => {
  return arr.filter((element) => element >= a && element <= b);
};
alert(filterRange(arr, 1, 4));
