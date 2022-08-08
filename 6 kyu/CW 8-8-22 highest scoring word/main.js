// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// **Solution**

function high(x){
    // Make a variable for the alphabet and split it ('')
    // Split each word in the string
    // Get the values of each letter using indexOf
    // Get the total values for each word and put them into an array
    // Find the index of the highest value
    // Return the highest value word from x using the index of the highest value
    
    const abc = '0abcdefghijklmnopqrstuvwxyz'.split('');
    x = x.split(' ');
  
    const values = x.map(word => {
      const splitWord = word.split('');
      let wordValue = 0
      for (let i = 0; i < splitWord.length; i++) {
        wordValue += abc.indexOf(splitWord[i])
      }
      return wordValue;
    })
    
    const highestValue = Math.max(...values);
    const highestValueIndex = values.indexOf(highestValue);
    return x[highestValueIndex];
}