// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// **Solution**

function abbrevName(name){
    const splitName = name.split(' ')
    const fInitial = splitName.slice(0, 1).join().slice(0, 1).toUpperCase();
    const lInitial = splitName.slice(1).join().slice(0, 1).toUpperCase();
    return `${fInitial}.${lInitial}`;
  
  }