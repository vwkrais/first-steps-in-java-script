//1. Greet function

// TODO: implement welcomeMsg function
function welcomeMsg(name) {
  return "Welcome " + name + "!";
}

console.log(welcomeMsg("Jane"));
// Welcome Jane!

console.log(welcomeMsg("Marc"));
// Welcome Marc!

//02. Gross Price Function
// TODO: implement calcGrossPrice function

function calcGrossPrice(net, VAT) {
  return Math.round(net * (1 + VAT) * 10) / 10;
}

function calcGrossPrice(net, VAT) {
  return net * (1 + VAT);
}

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

//03. Add Positive Function

// TODO: Implement the addPositive function

function addPositive(a, b) {
  return Math.sqrt(a * a) + Math.sqrt(b * b);
}

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9
