// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// There are preloaded dictionary you can use, named NATO
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

// **Solution**

function to_nato(words) {
	// Make an object with each letter in the alphabet to the NATO phonetic equivalent
  // Lowercase words
  // Loop through words and push each NATO letter into an array if exists in the obj. If not, push current character
  // Join the array

  words = words.toLowerCase();
  const translated = [];

  const nato = {
    'a': 'Alfa',
    'b': 'Bravo',
    'c': 'Charlie',
    'd': 'Delta',
    'e': 'Echo',
    'f': 'Foxtrot',
    'g': 'Golf',
    'h': 'Hotel',
    'i': 'India',
    'j': 'Juliett',
    'k': 'Kilo',
    'l': 'Lima',
    'm': 'Mike',
    'n': 'November',
    'o': 'Oscar',
    'p': 'Papa',
    'q': 'Quebec',
    'r': 'Romeo',
    's': 'Sierra',
    't': 'Tango',
    'u': 'Uniform',
    'v': 'Victor',
    'w': 'Whiskey',
    'x': 'Xray',
    'y': 'Yankee',
    'z': 'Zulu',
  };
  
  for (let i = 0; i < words.length; i++) {
    if (words[i] === ' ') {
      '';
    } else if (nato[words[i]] === undefined) {
      translated.push(words[i]);
    } else {
      translated.push(nato[words[i]]);
    }
  }

  return translated.join(' ');
}