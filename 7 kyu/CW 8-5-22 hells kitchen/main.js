// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

// **Solution**

function gordon(a){
    // Uppercase the parameter string
    // Split into an array with (' ')
    // Add '!!!!' to each element
    // Replace other vowels with *
    // Join and return the array with (' ')
    
    a = a.toUpperCase().split(' ');
    const gordoned = a.map(word => {
      word = word.replace(/A/g, '@');
      word = word.replace(/[EIOU]/gi, '*');
      return word + '!!!!'
    })
    return gordoned.join(' ');
}