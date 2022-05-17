// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// **Solution**

function solution(str){
    const splitStr = str.split('');
    const splitTwo = [];
     splitStr.forEach((el, i) => {
       if (i % 2 === 0) {
         splitTwo.push(splitStr[i] + splitStr[i+1]);
       }
     })
     const addUnderScore = splitTwo.map(el => {
       if (el.length > 2) {
         return el[0] + '_';
       }
       else {
         return el;
       }
     })
     return addUnderScore;
  }