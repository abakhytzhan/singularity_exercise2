function multiply(arr) {
    return function(num) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * num;
        }
        return arr;
    };
}

multiply([1, 2, 3])(2);  // [2, 4, 6]
multiply([4, 6, 5])(10); // [40, 60, 50]
multiply([1, 2, 3])(0);  // [0, 0, 0]



function multiply(arr) {
    return function(num) {
        let arr2 = arr.map(elem => elem * num);
        return arr2;
    };
  }
  
multiply([1, 2, 3])(2);  // [2, 4, 6]
multiply([4, 6, 5])(10); // [40, 60, 50]
multiply([1, 2, 3])(0);  // [0, 0, 0]