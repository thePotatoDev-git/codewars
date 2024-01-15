// Fix My Phone Numbers
// Oh thank goodness you're here! The last intern has completely ruined everything!

// All of our customer's phone numbers have been scrambled, and we need those phone numbers to annoy them with endless sales calls!

// The Format
// Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.

// However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and some are not phone numbers at all!

// For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more lines that we need to check.

// The Task
// Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".

// **Solution**

function isItANum(str) {
    // Make an array of digits 0-9
    // Split str to make it an array
    // Filter out str so only digits remain
    // If str starts with a 0 and is 11 digits, return the phone number
    // Else return 'Not a phone number'
    
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    const strArr = str.split('').filter(el => digits.includes(el)).join('');
    
    return strArr[0] === '0' && strArr.length === 11 ? strArr : 'Not a phone number';
}