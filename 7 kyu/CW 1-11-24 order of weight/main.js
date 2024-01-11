// Given an array of strings, sort the array into order of weight from light to heavy.

// Weight units are grams(G), kilo-grams(KG) and tonnes(T).

// Arrays will always contain correct and positive values aswell as uppercase letters.

// **Solution**

function arrange(arr){
    // Make variables for "G", "KG", and "T" and fill them correspondingly, but remove the letters
    // Sort the values for each of the variables in ascending order
    // Add the weight units back to each weight
    // Concat grams, kilograms, and tonnes
    
    let grams = []
    let kilograms = []
    let tonnes = []
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].endsWith('KG')) {
        kilograms.push(arr[i].slice(0, -2));
      } else if (arr[i].endsWith('G')) {
        grams.push(arr[i].slice(0, -1));
      } else {
        tonnes.push(arr[i].slice(0, -1));
      }
    }
    
    grams.sort((a, b) => a - b);
    kilograms.sort((a, b) => a - b);
    tonnes.sort((a, b) => a - b);
    
    grams = grams.map(el => el + 'G');
    kilograms = kilograms.map(el => el + 'KG');
    tonnes = tonnes.map(el => el + 'T');
    
    return [...grams, ...kilograms, ...tonnes]
}