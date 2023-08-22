// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

//                  ┌────────┐
//                  │-6------│
//                  └────────┘
// ┌────────┐       
// │------5-│        
// └────────┘  ┌─────► OK!
//             │    ┌────────┐
//             │    │-4------│
//             │    └────────┘
// ┌────────┐  │
// │------3-│  │     
// BANG!────┘  ├─────► OK! 
//   ▲  |\_/|  │    ┌────────┐
//   │ ("^-^)  │    │-2------│
//   │ )   (   │    └────────┘
// ┌─┴─┴───┴┬──┘
// │------1-│
// └────────┘
// Input
// Start and finish shelf numbers (always positive integers, finish no smaller than start)

// Task
// Find the minimum number of jumps to go from start to finish

// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

// **Solution**

function solution(start, finish) {
  // Make an empty number variable "jumps"
  // Make a loop that stops when i === finish
  // If finish - i >= 3, add 3 to i
  // If finish - i < 3, add 1 to i
  // Each loop add 1 to jumps
  
  let jumps = 0;
  
  for (let i = start; i < finish; i) {
    if (finish - i >= 3) {
      i = i + 3;
    } else {
      i = i + 1;
    }
    jumps++;
  }
  
  return jumps;
}

