// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// **Solution**

function reverseWords(str){
    let splitWords = str.split(' ');
    let reversedWords = splitWords.reverse();
    let reversedSentence = reversedWords.join(' ');
    return reversedSentence;
    
  }