// console.log("======Befehle / Commands=====");
// //.length gibt Länge von strings
// //.toUpperCase macht zu GROSSBuchstaben
// // .charAt bestimmt die Position eines Charcters im String
// // A.substring(x): nimmt die ersten x Postionen von A weg

// console.log("======Syntax Code=====");

// //for loop in function

// function letterCapitalization(str) {
//   let output = "";
//   for (let i = 0; i < str.length; i++)
//     if (i < str.length) {
//       output += str.charAt(i).toUpperCase();
//     } else {
//       output += str.charAt(i);
//     }
//   return output;
// }

// console.log(letterCapitalization("nasenbär"));

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

//   const a = 3;
//   const b = 5;
//   const divTrunc = Math.trunc (number/)
//   const TotalSumNumber = ((divTrunc+1)(div3Trunc/2))
//   15,30,45,60
//   Vielfache von a + Vielfache von b - Vielfache von a und b
//   Minus a*b(((trunc number-1/(a*b))+1)*2)
// }
// Math.trunc()
// solution ()
// Beispiel 61
function solution(number, divider1, divider2) {
  const n = Math.trunc((number - 1) / divider1);
  const m = Math.trunc((number - 1) / divider2);
  const o = Math.trunc((number - 1) / (divider1 * divider2));

  const sumalldiv1 = (n + 1) * (n / 2) * divider1;
  const sumalldiv2 = (m + 1) * (m / 2) * divider2;
  const sumdoubles = (o + 1) * (o / 2) * divider1 * divider2;
  result = sumalldiv1 + sumalldiv2 - sumdoubles;
  return [n, m, o, sumalldiv1, sumalldiv2, sumdoubles, result];
}

console.log(solution(16, 3, 5));


// function solution(number, divider1, divider2) {
//     dividers =[divder1,divider2,(divder1*divider2)];
//     for(let divider of divders)
    
//     const n = Math.trunc((number - 1) / divider1);
    
  
//     const sumalldiv1 = (n + 1) * (n / 2) * divider1;
    
//     return [n, m, o, sumalldiv1, sumalldiv2, sumdoubles, result];
//   }
  
//   console.log(solution(16, 3, 5));