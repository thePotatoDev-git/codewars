// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

// **Solution**

function differenceInAges(ages){
    // Find the yougest age and the oldest age and put them in their own variable
    // Find the difference and put it in a variable
    // Return the array with the [youngest, oldest, difference]
    
    const youngestAge = Math.min(...ages);
    const oldestAge = Math.max(...ages);
    const ageDifference = oldestAge - youngestAge;
    
    return [youngestAge, oldestAge, ageDifference];
}
  