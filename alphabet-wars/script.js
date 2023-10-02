function alphabetWar(fight) {
  let scoreLeft = 0;
  let scoreRight = 0;

  for (let i = 0; i < fight.length; i++) {
    if (fight[i] === "w") {
      scoreLeft += 4;
    } else if (fight[i] === "p") {
      scoreLeft += 3;
    } else if (fight[i] === "b") {
      scoreLeft += 2;
    } else if (fight[i] === "s") {
      scoreLeft += 1;
    } else if (fight[i] === "m") {
      scoreRight += 4;
    } else if (fight[i] === "q") {
      scoreRight += 3;
    } else if (fight[i] === "d") {
      scoreRight += 2;
    } else if (fight[i] === "z") {
      scoreRight += 1;
    }
  }

  if (scoreLeft > scoreRight) {
    return "Left side wins!";
  } else if (scoreLeft < scoreRight) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}

console.log(alphabetWar("z"));

console.log(alphabetWar("zdqmwpbs"));

console.log(alphabetWar("zzzzs"));

console.log(alphabetWar("wwwwww"));

console.log("======another Version of alphabetwars!!==========");
function alphabetWar(fight) {
  const leftRightPlayers = [
    //all players team left have negative values, team right positive values
    ["w", -4],
    ["p", -3],
    ["b", -2],
    ["s", -1],
    ["m", 4],
    ["q", 3],
    ["d", 2],
    ["z", 1],
  ];

  let score = 0;
  //if score is negative team left wins, if positive team right wins

  for (let i = 0; i < fight.length; i++) {
    const currentCharacter = fight[i];

    for (let i = 0; i < leftRightPlayers.length; i++) {
      const currentPlayer = leftRightPlayers[i][0];
      const currentScore = leftRightPlayers[i][1];

      if (currentPlayer === currentCharacter) {
        score += currentScore;
      }
    }
  }
  //return score;
  //returning the winner
  if (score < 0) {
    return "Left side wins!";
  } else if (score > 0) {
    return "Right side wins!";
  }

  return "Let's fight again!";
}

console.log(alphabetWar2("z"));

console.log(alphabetWar2("zdqmwpbs"));

console.log(alphabetWar2("zzzzs"));

console.log(alphabetWar2("wwwwww"));

// function alphabetWar(fight) {
//     let score = 0;
//     for (const letter of fight) {
//       switch (letter) {
//         case "w":
//           score -= 4;
//           break;
//         case "p":
//           score -= 3;
//           break;
//         case "b":
//           score -= 2;
//           break;
//         case "s":
//           score -= 1;
//           break;
//         case "m":
//           score += 4;
//           break;
//         case "q":
//           score += 3;
//           break;
//         case "d":
//           score += 2;
//           break;
//         case "z":
//           score += 1;
//           break;
//       }
//     }

//     return score < 0
//       ? "Left side wins!"
//       : score > 0
//       ? "Right side wins!"
//       : "Let's fight again!";
//   }
