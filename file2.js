function split(str) {
    let arr = str.split("");
    let sorted1 = "";
    let sorted2 = "";
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u") {
        sorted1 += arr[i];
      } else {
        sorted2 += arr[i];
      }
    }
    return sorted1 + sorted2;
  }
  
  console.log(split("abcde")); // "aebcd"
  console.log(split("Hello!")); // "eoHll!"
  console.log(split("What's the time?")); // "aeieWht's th tm?"