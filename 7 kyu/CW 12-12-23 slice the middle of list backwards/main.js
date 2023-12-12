// Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.

// **Solution**

function reverseMiddle(array) {
	// Check if the array has an even or odd amount of elements
  // If it's odd, grab the middle 3 elements
  // If it's even, grab the middle 2 elements
  // Reverse and return those elements
  
  let middleElements = [];
  
  if (array.length % 2 === 0) {
    const middle = array.length / 2;
    middleElements = array.slice(middle - 1, middle + 1);
  } else {
    const middle = Math.floor(array.length / 2);
    middleElements = array.slice(middle - 1, middle + 2);
  }
  
  return middleElements.reverse();
}