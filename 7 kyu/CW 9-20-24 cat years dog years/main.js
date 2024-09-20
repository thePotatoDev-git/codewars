// This is related to my other Kata about cats and dogs.

// Kata Task
// I have a cat and a dog which I got as kitten / puppy.

// I forget when that was, but I do know their current ages as catYears and dogYears.

// Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

// NOTES:

// Results are truncated whole numbers of "human" years
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// **Solution**

var ownedCatAndDog = function(catYears, dogYears) {
    // Make empty variables `catAge` and `dogAge`
    // Subtract 15 from pet years. If result is > 0, add 1 to pet ages
    // Subtract 9 from pet years. If result is > 0, add 1 to pet ages
    // Subtract 4/5 from pet years. If result is > 0, add 1 to get pet ages. Repeat until remaining years <= 0
    
    let catAge = 0;
    let dogAge = 0;
    
    if (catYears - 15 >= 0) {
      catAge++;
      catYears -= 15;
    } else {
      catYears = 0; // Stops counting years
    }
    
    if (dogYears - 15 >= 0) {
        dogAge++;
        dogYears -= 15;
    } else {
      dogYears = 0; // Stops counting years
    }
    
    if (catYears - 9 >= 0) {
      catAge++;
      catYears -= 9;
    } else {
      catYears = 0;
    }
    
    if (dogYears - 9 >= 0) {
      dogAge++;
      dogYears -= 9;
    } else {
      dogYears = 0;
    }
    
    while (catYears >= 4) {
      catYears -= 4;
      catAge++;
    }
    
    while (dogYears >= 5) {
      dogYears -= 5;
      dogAge++;
    }
    
    return [catAge, dogAge];
    
}