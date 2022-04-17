function fizzbuzz(n) {
    const fizzBuzzArray = []
    for (i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzArray.push("FizzBuzz");
      } else if (i % 3 === 0) {
        fizzBuzzArray.push("Fizz");
      } else if (i % 5 === 0) {
        fizzBuzzArray.push("Buzz");
      } else {
        fizzBuzzArray.push(i);
      }
    }
    return fizzBuzzArray;
  }