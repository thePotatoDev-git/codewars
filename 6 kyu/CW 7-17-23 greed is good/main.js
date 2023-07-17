// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

//  **Solution**

function score( dice ) {
    // Map out dice to count the occurrences of each number
    // Make an empty num variable "result"
    // If there are >= 3 1's, add 1000 to "result" and add (counts[1] - 3) * 100 to "result". Else add num * 100 to result.
    // If there are >= 3 5's, add 500 to "result" and add (counts[5] - 3) * 50 to "result". Else add num * 50 to result.
    // If there are >= 3 of any other number, add num * 100 to "result"
    console.log(dice)
    let result = 0;
    const counts = {};
  
    for (num of dice) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
  
    for (dieSide in counts) {
      if (dieSide === '1') {
        if (counts[dieSide] >= 3) {
          result += 1000;
          result += (counts[dieSide] - 3) * 100;
        } else {
          result += counts[dieSide] * 100;
        }
      } else if (dieSide === '5') {
        if (counts[dieSide] >= 3) {
          result += 500;
          result += (counts[dieSide] - 3) * 50;
        } else {
          result += counts[dieSide] * 50;
        }
      } else {
        if (counts[dieSide] >= 3) {
          result += dieSide * 100;
        }
      }
    }
  
    return result;
}