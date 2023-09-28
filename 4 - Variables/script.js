// const userName = Brad;
// userName = "Jenna";

// function getUserNameLength {
//   return const result = name.length
// }

// console.log(getUserNameLength(userName) > 4)
// // ^______________ Should log true

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(name) {
  const result = name.length;
  return result;
}

console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

// Implement a isString function.

//     The function has one parameter which could be any kind of data type
//     The function is written as a function expression
//     The function returns a boolean. It returns only true, when the data type is a string otherwise it will return false

// TODO: Implement the isString function

const isString = function (inputString) {
  const result = typeof inputString;
  return result === "string";
};

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true

// const isString = function (inputString) {
//   // const result = typeof inputString;
//   return typeof inputString;
// };

// console.log(isString("Hello"));
