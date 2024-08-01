// Task
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

function flickSwitch(arr){
    // Make a variable holding the flick state
    // Create an empty array
    // Loop through arr
    // If arr[i] is 'flick', change flick state and push flick state to empty array
    
    const newArr = [];
    let flick = true;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'flick') {
        flick = !flick;
        newArr.push(flick);
      } else {
        newArr.push(flick);
      }
    }
    
    return newArr;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// With .map
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function flickSwitch(arr){
  // Make a variable holding the flick state
  // Map through arr
  // If arr[i] is 'flick', change flick state
  // Return flick;
  
  let flick = true;
  
  const newArr = arr.map((el, i) => {
    if (arr[i] === 'flick') {
      flick = !flick;
    }
    return flick;
  })
  
  return newArr;
}