function specialReverse(str, letter) {
  return str.split(" ").map(elem => {
    if (elem[0] === letter) {
      return elem.split("").reverse().join("");
    }
    return elem;
  })
  .join(" ");
}
  
  console.log(specialReverse("word searches are super fun", "s"));
  // "word sehcraes are repus fun"
  
  console.log(specialReverse("first man to walk on the moon", "m"));
  // "first nam to walk on the noom"
  
  console.log(specialReverse("peter piper picked pickled peppers", "p"));
  // "retep repip dekcip delkcip sreppep"