// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// **Solution**

function solution(string) {
    string = string.split('');
    const addSpace = string.map(letter => {
        if (letter === letter.toUpperCase()) {
            return ' ' + letter;
        }else {
            return letter;
        }
    })
    return addSpace.join('');
}
