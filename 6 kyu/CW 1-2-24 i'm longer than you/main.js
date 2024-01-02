// Create a function longer that accepts a string and sorts the words in it based on their respective lengths in an ascending order. If there are two words of the same lengths, sort them alphabetically. Look at the examples below for more details.

// longer("Another Green World") => Green World Another
// longer("Darkness on the edge of Town") => of on the Town edge Darkness
// longer("Have you ever Seen the Rain") => the you Have Rain Seen ever
// Assume that only only Alphabets will be entered as the input. Uppercase characters have priority over lowercase characters. That is,

// longer("hello Hello") => Hello hello

// **Solution**

function longer(s) {
    // Split s into individual words
    // Sort s by abc order
    // Sort s by the length of the words in ascending order
  
    const splitS = s.split(' ')
                    .sort()
                    .sort((a, b) => a.length - b.length);
  
    return splitS.join(' ');
}