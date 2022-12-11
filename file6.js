function filter(arr, func) {
    if (typeof(arr[0]) === 'object') {
      return arr.map(elem => {
        let value;
        for (let key in elem) {
          value = elem[key];
        }
        return value;
      })
      .filter(func);
    } else {
      return arr.filter(func);
    }
  }
  
  console.log(filter([1, 2, 3, 4], (v) => v > 2)); // [3, 4]
  
  console.log(filter(["pie", "pony", "browny", "coffee"], (v) => v.includes("ny"))); // ["pony", "browny"]
  
  console.log(filter([{age: 20}, {age: 30}, {age: 40}, {age: 50}], (v) => v === 20)); // [20]