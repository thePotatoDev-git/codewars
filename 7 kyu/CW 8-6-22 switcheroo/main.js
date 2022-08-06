// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// **Solution**

function switcheroo(x){
    // Split the string into individual letters
    // Iterate through the array and if a letter is 'a', then change it to 'b' and vice versa
    // Join the array and return it
    
    x = x.split('');
    const switched = x.map(letter => {
      if (letter === 'a') {
        return 'b';
      } else if (letter === 'b') {
        return 'a';
      } else {
        return letter;
      }
    })
    return switched.join('');
}