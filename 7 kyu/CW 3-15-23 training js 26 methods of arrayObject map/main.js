// Task
// Coding in function isolateIt. function accept 1 parameters arr, it's a string array. Your task is to put a character "|" into the middle of each element.

// If the string length is an even number, use the insert method. for example: "abcd" should became "ab|cd". "|" should be inserted between ab and cd.

// If the string length is an odd number, use the replacement method. for example: "abcde" should became "ab|de". Character c will be replaced by |.

// The original array should not be changed, you need to return a new array(if you use the map method, you do not need to worry about this).

// Example
// isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
// isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
// isolateIt(["1234","56789"]) should return ["12|34","56|89"]

// **Solution**

function isolateIt(arr){
    // If an element's length is odd, find the middle index number, delete it, and add |
    // If an element's length is even, find the middle index number and add |
    // Return the arr
    
    return arr.map(el => {
      if (el.length % 2 === 0) {
        let mid = el.length / 2;
        return el.slice(0, mid) + '|' + el.slice(mid);
      } else {
        let mid = Math.floor(el.length / 2);
        return el.slice(0, mid) + '|' + el.slice(mid + 1);
      }
    })
}