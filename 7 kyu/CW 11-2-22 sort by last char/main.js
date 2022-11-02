// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// **Solution**

function last(x){
    x = x.split(' ');
    return x.sort((a, b) => {
        const lastA = a[a.length - 1];
        const lastB = b[b.length - 1];
        
        return lastA < lastB ? - 1 : 1
    })
}