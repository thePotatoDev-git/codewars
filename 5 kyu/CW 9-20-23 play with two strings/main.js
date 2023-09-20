// Your task is to Combine two Strings. But consider the rule...

// By the way you don't have to check errors or incorrect input values, everything is ok without bad tricks, only two input strings and as result one output string;-)...

// And here's the rule:
// Input Strings a and b: For every character in string a swap the casing of every occurrence of the same character in string b. Then do the same casing swap with the inputs reversed. Return a single string consisting of the changed version of a followed by the changed version of b. A char of a is in b regardless if it's in upper or lower case - see the testcases too.
// I think that's all;-)...

// Some easy examples:

// Input: "abc" and "cde"      => Output: "abCCde" 
// Input: "ab" and "aba"       => Output: "aBABA"
// Input: "abab" and "bababa"  => Output: "ABABbababa"
// Once again for the last example - description from KenKamau, see discourse;-):

// a) swap the case of characters in string b for every occurrence of that character in string a
// char 'a' occurs twice in string a, so we swap all 'a' in string b twice. This means we start with "bababa" then "bAbAbA" => "bababa"
// char 'b' occurs twice in string a and so string b moves as follows: start with "bababa" then "BaBaBa" => "bababa"

// b) then, swap the case of characters in string a for every occurrence in string b
// char 'a' occurs 3 times in string b. So string a swaps cases as follows: start with "abab" then => "AbAb" => "abab" => "AbAb"
// char 'b' occurs 3 times in string b. So string a swaps as follow: start with "AbAb" then => "ABAB" => "AbAb" => "ABAB".

// c) merge new strings a and b
// return "ABABbababa"

// There are some static tests at the beginning and many random tests if you submit your solution.

// **Solution**

function workOnStrings(a,b){
    // Make a function that lowercases an uppercase letter or uppercases a lowercase letter
    // Make copies of a and b and split them
    // Make copies of a and b but all lowercase
    // Make a nested loop of lowercase a and b
    // If b[j] === a[i], run the case function on the split copy b[j]
    // Run another nested loop swapping a and b
  
    const caseSwap = letter => {
      if (letter === letter.toLowerCase()) {
        return letter.toUpperCase();
      } else {
        return letter.toLowerCase();
      }
    };
  
    const aCopySplit = a.split('');
    const bCopySplit = b.split('');
    const aCopyLower = a.toLowerCase();
    const bCopyLower = b.toLowerCase();
  
    for (let i = 0; i < aCopyLower.length; i++) {
      for (let j = 0; j < bCopyLower.length; j++) {
        if (aCopyLower[i] === bCopyLower[j]) {
          bCopySplit[j] = caseSwap(bCopySplit[j]);
        }
      }
    }
  
    for (let i = 0; i < bCopyLower.length; i++) {
      for (let j = 0; j < aCopyLower.length; j++) {
        if (bCopyLower[i] === aCopyLower[j]) {
          aCopySplit[j] = caseSwap(aCopySplit[j]);
        }
      } 
    }
  
    return [...aCopySplit, ...bCopySplit].join('');
}