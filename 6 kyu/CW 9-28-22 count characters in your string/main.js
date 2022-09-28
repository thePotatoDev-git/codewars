// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// **Solution**

function count (string) {  
    const counts = {};
    
    for (const num of string) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return counts;
}