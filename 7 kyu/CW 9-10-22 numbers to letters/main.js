// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

// **Solution**

function switcher(x){
    // Make a variable abcReversed with 'abc!? ' reversed
    // Make empty variable finalString
    // Find the character matching with each number in x
    // Add each character into the empty variable
    
    const abcReversed = ' zyxwvutsrqponmlkjihgfedcba!? ';
    let finalString = '';
    
    for (let i = 0; i < x.length; i++) {
      let index = Number(x[i]);
      finalString += abcReversed[index];
    }
    return finalString;
}