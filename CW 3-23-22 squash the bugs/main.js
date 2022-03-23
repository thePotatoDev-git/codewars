function findLongest(str) {
  
    var spl = str.split(" ");
    var longest = 0
    
    for (var i = 0; i <= spl.length - 1; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length
      }
    }
    return longest
    }