// 01) oddNumbers function

// Implement a oddNumbers function.

//     The function has two parameters, both are numbers.
//     Iterate over all numbers between first number and the second number.
//     Store all oddNumbers in string, seperated by a comma and return the string.
//     Allowed are only positive numbers, add a check.

// TODO: Implement the oddNumbers function
console.log("====Es rennt!=====");

function oddNumbers(startNumber, endNumber) {
  let result = "";
  if (startNumber >= 0 && endNumber >= 0) {
    for (let i = startNumber + 1; i < endNumber; i++)
      if (!Number.isInteger(i / 2)) {
        result = result + "," + i;
      }
    result = result.substring(1);
    return result;
  } else {
    return "invalid parameter";
  }
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

console.log(oddNumbers(-1, 7));
// result should be: invalid parameter
// 02) charCount function

// Implement a charCount function.

//     The function has a first parameter for a word which is a string.
//     The function has a second parameter which contains the character to search for which is a string.
//    Check if the second parameter consists of only one character, if not, quit the function.
//     The function returns the number of times the character from the second parameter is present in the word.
//     The function should be case insensitive.

console.log("=======CharCount=======");

function charCount(wordToExamine, characterToFind) {
  let result = 0;
  for (i = 0; i < wordToExamine.length; i++)
    if (characterToFind.lenth !== 1) {
      break;
    } else if (wordToExamine.charAt(i) === characterToFind) {
      result++;
    }
  return result;
}
// TODO: Implement the charCount function

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
// // TODO: Implement the charCount function

// console.log(charCount("hello", "l"));
// // result should be: 2

// console.log(charCount("mama", "m"));
// // result should be: 2

// console.log(charCount("Resümee", "e"));
// // result should be: 3

console.log(charCount("Resümee", "eee"));
// result should be: 3
// // TODO: Implement the charCount function

console.log("=======CharCount 2.Versuch=======");

function charCount(wordToExamine, characterToFind) {
  let result = 0;
  for (i = 0; i < wordToExamine.length; i++)
    if (wordToExamine.charAt(i) === characterToFind) {
      result++;
    }
  return result;
}
// TODO: Implement the charCount function

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
// // TODO: Implement the charCount function

// console.log(charCount("hello", "l"));
// // result should be: 2

// console.log(charCount("mama", "m"));
// // result should be: 2

// console.log(charCount("Resümee", "e"));
// // result should be: 3

console.log(charCount("Resümee", "ee"));
// result should be: 3
// // TODO: Implement the charCount function
