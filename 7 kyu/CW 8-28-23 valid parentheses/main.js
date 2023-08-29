// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100

// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.

// Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you!

// **Solution**

function validParentheses(parenStr) {
    // Make an empty array variable "parentheses"
    // Loop through parenStr
    // If parenStr[i] is '(', push it to parentheses
    // If parenStr[i] is ')' and parentheses.length is > 0 and the last char is parentheses is '(', pop parentheses
    // Else return false
    // If parentheses.length is 0, return true
    
    const parentheses = [];
    
    for (let i = 0; i < parenStr.length; i++) {
      if (parenStr[i] === '(') {
        parentheses.push('(');
      } else if (parenStr[i] === ')' && parentheses.length > 0 && parentheses[parentheses.length - 1] === '(') {
        parentheses.pop();
      } else {
        return false;
      }
    }
    
    return parentheses.length === 0;
}