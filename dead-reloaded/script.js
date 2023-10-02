const suspectInfo = {
  James: ["Jacob", "Bill", "Lucas"],
  Johnny: ["David", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"],
};

const dead = ["Lucy", "Kyle"]; // dead people

// const suspectInfo = Object.entries(suspectInfoObj); // object to array

// console.log(_suspectInfo);
function killer(suspectInfo, dead) {
  for (let suspect in suspectInfo) {
    let killCount = 0;
    for (let currentDead of dead) {
      for (let suspectContact of suspectInfo[suspect]) {
        if (suspectContact === currentDead) {
          killCount++;
        }
        if (killCount === dead.length) {
          return suspect;
        }
      }
    }
  }
}
// for (let suspectInfo of _suspectInfo) {
//
// let currentSuspect = _suspectInfo[i];
// let currentSuspectContacts = _suspectInfo[i][i];
// let killer = [currentSuspect];

// for (let i2 = 0; i2 < _suspectInfo.length[i2][i2]; i2++) {
//   if (_suspectInfo[i][i2] === dead[i]) {
//     killer = currentSuspect;
//   }else {
//     killer = " ";
//     continue;
//   }

//       const [
//         currentSuspectName, // Peter
//         currentSuspectContacts, // [array mit den contacts]
//       ] = suspectInfo[i];
//       let isKiller = currentSuspectContacts.length >= dead.length;

//       if (!isKiller) {
//         continue;
//       }

//       for (let i2 = 0; i2 < dead.length; i2++) {
//         // ["Lucy", "Kyle"]
//         const currentDead = dead[index2]; // Kyle
//         // Annahme: currentSuspectName ist der Killer
//         // Überprüfe die nächste tote Person, und schaue ob currentSuspectName immer noch der Killer ist
//         isKiller = isKiller && currentSuspectContacts.includes(currentDead);
//         if (!isKiller) {
//           break;
//         }
//       }

//       if (isKiller) {
//         return currentSuspectName;
//       }
//     }
//   }
// }
// // console.log(killer(suspectInfo, dead));

// ======================================
// Von Marco u Alex:
// =================================

// "use strict";
// // objects are key:value pairs
// const test = {
//   animals: ["cat", "dog", "monkey"],
//   fruits: ["banana", "apple", "strawberry"],
//   cars: ["BMW", "AUDI", "FORD"],
// };

// test["age"] = [47];
// test["age"].push(33, 55);

// console.log(Object.keys(test)); // log all keys/properties of the object "test"
// console.log(Object.values(test.fruits)); // log all values of the property "fruits" of the object "test"
// console.log(Object.entries(test)); // log the whole object with all keys and values

// // iterate over keys with for in loop //
// console.log("=== for in loop / keys ===");
// for (const i in test) {
//   // iterate over object "test" and log the values of the keys/properties by [i]
//   console.log(test[i]); // same as test.animals + test.fruits + test.cars
// }
// console.log(test.animals);
// console.log(test.fruits);
// console.log(test.cars);
// // iterate over values with for in loop in for in loop
// console.log("=== for in loop / values ===");

// for (const currentKey in test) {
//   console.log(test[currentKey]); // iterate over all keys and log the values
//   for (const currentValue in currentKey) {
//     // iterate over the values of every key
//     if (test[currentKey][currentValue] === "apple") {
//       // if the currentValue of the currentKey is "apple", ..
//       console.log(currentKey); // , ..then log the currentKey = "fruits"
//     }
//   }
// }

// Alex R to Everyone (2. Oct 2023, 09:42)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every?retiredLocale=de
