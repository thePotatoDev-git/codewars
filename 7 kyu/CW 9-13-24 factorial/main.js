// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// **Solution**

function factorial(n){
    // Base case
    if (n < 2) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
}