// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

// **Solution**

function encrypt(text, n) {
    // Loop through text
    // Make a variable "oddIndex" with just the odd-indexed chars
    // Make a variable "evenIndex" with just the even-indexed chars
    // Make a variable "encrypted" with "oddIndex" + "evenIndex"
    // Repeat the process n times
    
    if (text === null || n <= 0) {
      return text;
    }
  
    let encrypted = text;
  
    for (let i = 0; i < n; i++) {
      let oddIndex = '';
      let evenIndex = '';
      
      for (let j = 0; j < text.length; j++) {
    
        if (j % 2 === 0) {
          evenIndex += encrypted[j];
        } else {
          oddIndex += encrypted[j];
        }
      }
      encrypted = oddIndex + evenIndex;
    }
    
    return encrypted;
}
  
  function decrypt(encryptedText, n) {
      if (encryptedText === null || n <= 0) {
        return encryptedText;
      }
    
    const length = encryptedText.length;
    const middle = Math.floor(length / 2);
  
    for (let i = 0; i < n; i++) {
      const oddIndex = encryptedText.slice(0, middle);
      const evenIndex = encryptedText.slice(middle);
  
      let decrypted = '';
  
      for (let j = 0; j < middle; j++) {
        decrypted += evenIndex[j] + oddIndex[j];
      }
  
      if (length % 2 !== 0) {
        decrypted += evenIndex[middle];
      }
  
      encryptedText = decrypted;
    }
  
    return encryptedText;
}