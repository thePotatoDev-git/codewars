// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

// **Solution**

function nextId(ids){
    // Make a loop that will check the current element with the next element
    // If the element + 1 does not equal to the next element, return that number
    
    // for (let i = 0; i < ids.length; i++) {
    //   if (ids[i] + 1 !== ids[i + 1]) {
    //     return ids[i] + 1;
    //   }
    // }
  
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] === ids[i+1]) {
        i;
      } else if (ids[i] + 1 !== ids[i + 1]) {
        return ids[i] + 1;
      }
    }
}