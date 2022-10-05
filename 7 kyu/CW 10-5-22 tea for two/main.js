// Tea for two!

// Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.

// tea42('coffee') //should return 'coffee'
// tea42('tea') //should return 'tea'
// tea42('2ea') //should return 'tea'
// tea42(9022) //should return '90tt'
// tea42(5676765) //should return '5676765'
// tea42('2u2u') //should return 'tutu'

// **Solution**

function tea42(input) {
    // Turn the input into a string
    // Split the string into individual elements
    // Replace every '2' to a 't'
    // Return final result
    
    input = input.toString().split('');
    
    const convert2 = input.map(el => el === '2' ? 't' : el);
    
    return convert2.join('');
}