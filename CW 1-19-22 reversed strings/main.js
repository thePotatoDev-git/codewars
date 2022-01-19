// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// **Solution**

function solution(str){
    let splitString = str.split('');
    
    let reverseArray = splitString.reverse();
    
    let joinString = reverseArray.join('');
    
    return joinString;
  }