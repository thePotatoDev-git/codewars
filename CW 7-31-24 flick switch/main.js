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