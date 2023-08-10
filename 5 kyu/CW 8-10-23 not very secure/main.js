// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

// **Solution**

function alphanumeric(string){
    // Make a variable with all latin letters and digits
    // Loop through string
    // If lettersAndDigits variable !includes string[i], return false
    
    if (string.length === 0) {
      return false;
    }
    
    const lettersAndDigits = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    
    for (let i = 0; i < string.length; i++) {
      if (!lettersAndDigits.includes(string[i])) {
        return false;
      }
    }
    
    return true;
}