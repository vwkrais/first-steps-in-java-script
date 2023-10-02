const suspectInfo = {
  James: ["Jacob", "Bill", "Lucas"],
  Johnny: ["David", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"],
};

const suspectInfo = Object.entries(suspectInfoObj);

const dead = ["Lucas", "Bill"];
// Examine further =>
// Object.keys
// Object.values
// Object.entries

function killer(suspectInfo, dead) {
  for (let currentSuspect in suspectInfo) {
    const suspectContacts = suspectInfo[currentSuspect];
    if (dead.every((deadPerson) => suspectContacts.includes(deadPerson))) {
      return currentSuspect;
    }
  }
}

console.log(suspectInfo);

// for (property in suspectInfo) {
//   console.log(property);
// }

// 1. Nimm den ersten Toten und schaue, ob dieser vom 1. Verdächtigen gesehen wurde

// 2. falls ja weiter mit 2. Toten... bis zum Ende der List

// function killer(suspectInfo, dead) {
//     for (let i=0; i< dead.length; i++)
//         dead[i] in suspectInfo [i]
//   }

// //suspectInfo: People seen by suspect____ handed in as object:
// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}

// //dead: People dead___ handed in as array:
// ['Lucas', 'Bill']

// //Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Killer", function() {
//   describe("Basic tests", function() {
//     it("The killer is James!", function() {
//       assert.deepEqual(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']), 'James');
//     });

//     it("The killer is Megan!", function() {
//       assert.deepEqual(killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']), 'Megan');
//     });
//   });
// });
