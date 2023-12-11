// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

// **solution**

function remove(s,n){
    // Loop through s while n is > 0
    // If s[0] is '!', replace it with an empty string and subtract 1 from n
    // Return the final string
  
    const splitString = s.split('');
    
    for (let i = 0; i < s.length; i++) {
      if (splitString[i] === '!' && n > 0) {
        splitString[i] = '';
        n--;
      }
    }
    
    return splitString.join('');
}