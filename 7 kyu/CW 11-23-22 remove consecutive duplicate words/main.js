// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// **Solution**

const removeConsecutiveDuplicates = s => {
    // Split str into separate elements
    // Make a loop and compare the current element with the next element
    // If they match, remove the current element
    // Join the final result

    const splitStr = s.split(' ');
    const newArr = [];

    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] !== splitStr[i+1]) {
            newArr.push(splitStr[i])
        }
    }

    return newArr.join(' ');
}