function accumulatingArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      arr[i] = sum;
    }
    return arr;
  }
  
  console.log(accumulatingArray([1, 2, 3, 4])); // [1, 3, 6, 10]
  // [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]
  console.log(accumulatingArray([1, 5, 7])); // [1, 6, 13]
  console.log(accumulatingArray([1, 0, 1, 0, 1])); // [1, 1, 2, 2, 3]
  console.log(accumulatingArray([])); // []