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
*/
let extractCurrencyValue = function (str) {
  return Number(str.substring(1));
};
alert(extractCurrencyValue("$120") === 120);
