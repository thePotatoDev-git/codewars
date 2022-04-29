function strCount(str, letter){  
    let totalOccurences = 0;
    
    str.split('').forEach(el => {
      if (el === letter) {
        totalOccurences += 1;
      }
    })
    return totalOccurences;
  }