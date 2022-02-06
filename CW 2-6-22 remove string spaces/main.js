// Simple, remove the spaces from the string, then return the resultant string.

// **Solution**

function noSpace(x){
    let removedSpace = x.split(' ').join('');
    return removedSpace;
  }