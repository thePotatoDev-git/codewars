// Determine if the poker hand is flush, meaning if the five cards are of the same suit.

// Your function will be passed a list/array of 5 strings, each representing a poker card in the format "5H" (5 of hearts), meaning the value of the card followed by the initial of its suit (Hearts, Spades, Diamonds or Clubs). No jokers included.

// Your function should return true if the hand is a flush, false otherwise.

// The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

// Examples
// ["AS", "3S", "9S", "KS", "4S"]  ==> true

// ["AD", "4S", "7H", "KS", "10S"] ==> false

// **Solution**

function isFlush(cards) {
    // Iterate through every element in the array
    // Check to see if every suit in each element is the same
    // If they are all the same, return true. If not, return false
    console.log(cards)
    for (const i in cards) {
      if (cards[i][cards[i].length - 1] !== cards[0][cards[0].length - 1]) {
        return false;
      }
    }
   return true
}