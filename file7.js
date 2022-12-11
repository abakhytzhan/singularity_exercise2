function filterUnique(arr) {
    const sorted = arr.filter(elem => {
      let elemArr = [];
      for (let i = 0; i < elem.length; i++) {
        if (!elemArr.includes(elem[i])) {
          elemArr.push(elem[i]);
        }
      }
      if (elemArr.length === elem.length) {
        return elem;
      }
    });
    return sorted;
  }
  
  console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"])); // ["abc"]
  // "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.
  
  console.log(filterUnique(["88", "999", "989", "9988", "9898"])); // []
  
  console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"])); // ["ABCDE", "BED", "BAC"]