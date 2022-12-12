function split(str) {
  let sorted1 = "";
  let sorted2 = "";
  
  for (let i = 0; i < str.length; i++) {
    const letter = str.at(i);
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      sorted1 += letter;
    } else {
      sorted2 += letter;
    }
  }
  return sorted1 + sorted2;
}
  
  console.log(split("abcde")); // "aebcd"
  console.log(split("Hello!")); // "eoHll!"
  console.log(split("What's the time?")); // "aeieWht's th tm?"