// Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

// Examples
// 420 should return ["4", "42", "420"]
// 2017 should return ["2", "20", "201", "2017"]
// 2010 should return ["2", "20", "201", "2010"]
// 4020 should return ["4", "40", "402", "4020"]
// 80200 should return ["8", "80", "802", "8020", "80200"]
// PS: The input is guaranteed to be an integer in the range [0, 1000000]

// **Solution**

function createArrayOfTiers(num) {
    // Create an empty array
    // Turn `num` into a string
    // Loop through `num`
    // Slice num(0, i) and push it to the empty array
    
    const tiers = [];
    
    const numStr = num.toString();
    
    for (let i = 1; i <= numStr.length; i++) {
      tiers.push(numStr.slice(0, i));
    }
    
    return tiers;
}