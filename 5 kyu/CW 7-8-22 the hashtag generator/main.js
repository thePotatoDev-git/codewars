// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// **Solution**

function generateHashtag (str) {
    if (str.trim().length === 0) {
      return false;
    } else {
        // Split into words in an array and remove empty elements
        str = str.split(' ').filter(el => el !== '');
        // Capitalize first letters of each word
        const capitalized = str.map(word => word[0].toUpperCase() + word.substring(1));
        // Add #
        capitalized.unshift('#');
        // Join everything
        return capitalized.join('').length > 140 ? false : capitalized.join('');
      }
}