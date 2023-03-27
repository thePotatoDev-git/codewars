// Emotional Sort ( ︶︿︶)
// You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

// :D -> Super Happy
// :) -> Happy
// :| -> Normal
// :( -> Sad
// T_T -> Super Sad
// Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

// And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

// Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

// Super Happy -> Happy -> Normal -> Sad -> Super Sad
// If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

// Super Sad -> Sad -> Normal -> Happy -> Super Happy
// Example:

// arr = [':D', ':|', ':)', ':(', ':D']
// sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
// sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]

// **Solution**

function sortEmotions(arr, order){
    // Make an array of emotions from happiest to saddest
    // Map arr to make an array of numbers from 0 to 4
    // Sort that array
    // Map that array to match with the emotions array
    // If order is false, return the array reversed
    
    if (arr === []) {
      return arr;
    }
  
    const emotions = [':D', ':)', ':|', ':(', 'T_T'];
    const emotionToNums = arr.map(emote => {
      if (emote === ':D') {
        return 0;
      } else if (emote === ':)') {
        return 1;
      } else if (emote === ':|') {
        return 2;
      } else if (emote === ':(') {
        return 3;
      } else if (emote === 'T_T') {
        return 4;
      }
    }).sort();
  
      const sortedEmotions = [];
      for (let i = 0; i < arr.length; i++) {
        sortedEmotions.push(emotions[emotionToNums[i]]);
      }
  
      return order === true ? sortedEmotions : sortedEmotions.reverse();
  }