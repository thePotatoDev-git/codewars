// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// **Solution**

function validBraces(braces){
    // Make a variable 'parentheses' = []
    // Loop through braces
    // If it is a left brace, push it to parentheses
    // If it is a right brace and the last brace in parentheses is a matching left brace, pop parentheses
    // Else return false
    
    const parentheses = [];
    
    for (let i = 0; i < braces.length; i++) {
      if (braces[i] === '(' || braces[i] === '[' || braces[i] === '{') {
        parentheses.push(braces[i]);
      } else if (braces[i] === ')' && parentheses[parentheses.length - 1] === '(') {
        parentheses.pop();
      } else if (braces[i] === ']' && parentheses[parentheses.length - 1] === '[') {
        parentheses.pop();
      } else if (braces[i] === '}' && parentheses[parentheses.length - 1] === '{') {
        parentheses.pop();
      } else {
        return false;
      }
    }
    
    return parentheses.length === 0;
  }