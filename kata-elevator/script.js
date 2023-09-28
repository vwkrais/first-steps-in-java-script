// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

//     left - The current floor of the left elevator
//     right - The current floor of the right elevator
//     call - The floor that called an elevator

// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// Write a function
// 1. Ausrechnen Abstand call zu left
// 2. Ausrechnen Abstand call zu right
// 3. Vergleichen der Abstände
// 4. Ausgabe elevator left or right

// Wenn distance left zu call kleiner als right zu call: return left
// Wenn distance right zu call kleiner/gleich left zu call: return right

// function elevator(left, right, call) {
//   const distanceLeft = Math.abs(call - left);
//   const distanceRight = Math.abs(call - right);

//   if (distanceLeft < distanceRight) {
//     return "left";
//   }

//   if (distanceLeft >= distanceRight) {
//     return "right";
//   }
// }

// console.log(elevator(0, 1, 0));
// console.log(elevator(0, 1, 1));
// console.log(elevator(0, 1, 2));
// console.log(elevator(0, 0, 0));
// console.log(elevator(0, 2, 1));

const stringToNumber = function (str) {
  return Number(str);
};

describe("stringToNumber", function () {
  it("should work for the examples", function () {
    Test.assertEquals(stringToNumber("1234"), 1234);
    Test.assertEquals(stringToNumber("605"), 605);
    Test.assertEquals(stringToNumber("1405"), 1405);
    Test.assertEquals(stringToNumber("-7"), -7);
  });
});
