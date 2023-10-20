// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

// Worked Example
// ["right", "right", "right", "right", "left", "right"] ➞ 1
// # You spun right 4 times (90 * 4 = 360)
// # You spun left once (360 - 90 = 270)
// # But you spun right once more to make a full rotation (270 + 90 = 360)
// Examples
// ["left", "right", "left", "right"] ➞ 0

// ["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

// ["left", "left", "left", "left"] ➞ 1

// **Solution**

function spinAround(turns) {
    // Make an empty number variable "degrees"
    // Loop through turns
    // If turns[i] is 'right', add 90 to "degrees"
    // If turns[i] is 'left', subtract 90 from "degrees"
    // Make degrees positive, divide it by 360, and return the floor
    
    let degrees = 0;
    
    for (let i = 0; i < turns.length; i++) {
      turns[i] === 'right' ? degrees += 90 : degrees -= 90;
    }
    
    return Math.floor(Math.abs(degrees) / 360);
}