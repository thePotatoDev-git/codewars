// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.

// **Solution**

function broken(x){
    // Make an empty string `reversed`
    // Loop through x
    // If x[i] is 0, add 1 to `reversed` and vice versa
    // Return `reversed`
    
    let reversed = '';
    
    for (let i = 0; i < x.length; i++) {
      if (x[i] === '0') {
        reversed += '1';
      } else {
        reversed += '0';
      }
    }
    
    return reversed;
}