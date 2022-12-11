function lambdaDepth(num) {
    if (num === 0) {
      return 'edabit';
    }
    return function func() {
      num--;
      if (num <= 0 ) {
        return 'edabit';
      } else {
        return func;
      }
    };
  }
  
  console.log(lambdaDepth(0)); // "edabit"
  console.log(lambdaDepth(1)()); // "edabit"
  console.log(lambdaDepth(2)()()); // "edabit"
  console.log(typeof lambdaDepth(2)()); // "function"