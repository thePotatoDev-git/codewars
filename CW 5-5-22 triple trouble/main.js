function tripleTrouble(one, two, three){
    const allCombined = [];
    for (i = 0; i < one.length; i++) {
      allCombined.push(one[i] + two[i] + three[i]);
    }
    return allCombined.join('');
   }