function nameShuffler(str) {
  //Shuffle It
  let nameReverse = str.split(" "); //wandelt str in ein array um
  nameReverse.reverse(); //kehrt die Reihenfolge im Array um
  const result = nameReverse.join(" "); //wandelt das Array wieder in einen String um
  return result; //gibt den String aus
}

// Body weight index
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

function bmi(weight, height) {
    return "";
  }
