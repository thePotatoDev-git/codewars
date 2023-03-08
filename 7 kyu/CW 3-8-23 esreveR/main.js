// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

// **Solution**

reverse = function(array) {
    // Make an empty reversed array
    // Loop through array starting from the last element
    // Push each element into reversed
    
    let reversed = [];
    
    for (let i = array.length - 1; i >= 0; i--) {
      reversed.push(array[i])
    };
    
    return reversed;
  }