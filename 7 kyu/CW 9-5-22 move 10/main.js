// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

// **Solution**

function moveTen(s){
    // Make a variable with an array of the alphabet twice
    // Split s into individual letters
    // Replace each character with a character 10 places ahead of it
    // Join the array
    
    const abcabc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.split('');
    s = s.split('');
    
    const tenAhead = s.map((letter) => {
      let index = abcabc.indexOf(letter)
      return abcabc[index + 10];
    });
    return tenAhead.join('');
}