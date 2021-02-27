/** @type {string[]} */
let lowerCaseArr = []

/** @type {string[]} */
let numberArr = []

/** @type {string[]} */
let upperCaseArr = []

/** @type {string[]} */
let specialCharArr = []

for (let i = 97; i <= 122; i++) {
  lowerCaseArr.push(String.fromCharCode(i))
}

upperCaseArr = lowerCaseArr.map((char) => char.toUpperCase());

for (let i = 48; i <= 57; i++) {
  numberArr.push(String.fromCharCode(i))
}

specialCharArr = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  "`",
  "~",
  ".",
  "'",
  ",",
  "\"",
  "?",
  "\\",
  "|",
  "/"
];

export { lowerCaseArr, upperCaseArr, numberArr, specialCharArr };