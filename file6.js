function filter(arr, func) {
  let filtered = [];
  if (typeof(arr[0]) === 'object') {
    let arr2 = [];
    arr2 = arr.map(elem => {
      let value;
      for (let key in elem) {
        value = elem[key];
      }
      return value;
    });
    for (let elem of arr2) {
      if (func(elem)) {
        filtered.push(elem);
      }
    }
  } else {
    for (let elem of arr) {
      if (func(elem)) {
        filtered.push(elem);
      }
    }
  }
  return filtered;
}
  
  console.log(filter([1, 2, 3, 4], (v) => v > 2)); // [3, 4]
  
  console.log(filter(["pie", "pony", "browny", "coffee"], (v) => v.includes("ny"))); // ["pony", "browny"]
  
  console.log(filter([{age: 20}, {age: 30}, {age: 40}, {age: 50}], (v) => v === 20)); // [20]