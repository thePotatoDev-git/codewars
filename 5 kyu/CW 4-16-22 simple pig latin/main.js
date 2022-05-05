// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// **Solution**

function pigIt(str) {
    str = str.split(' ');
    const pLatin = str.map(el => {
        if (el === '!' || el === '.' || el === '?') {
            return el;
        } else {
            return el.substring(1) + el.charAt(0) + 'ay';
        }
    })
    return pLatin.join(' ');
}