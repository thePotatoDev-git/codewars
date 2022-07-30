// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

// **Solution**

function spacify(str) {
    // Split str into individual characters
    // Join the array with a space
    str = str.split('');
    return str.join(' ');
}