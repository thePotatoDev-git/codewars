// Among the ruins of an ancient city a group of archaeologists found a mysterious function with lots of HOLES in it called getNum(n) (or get_num(n) in ruby, python, or r). They tried to call it with some arguments. And finally they got this journal:

// getNum(300) #-> returns 2
// getNum(90783) #-> returns 4
// getNum(123321) #-> returns 0
// getNum(89282350306) #-> returns 8
// getNum(3479283469) #-> returns 5
// The archaeologists were totally stuck with this challenge. They were all in desperation but then.... came YOU the SUPER-AWESOME programmer. Will you be able to understand the mystery of this function and rewrite it?

// **Solution**

var getNum = function(n) {
    // Turn n into a string
    // Loop through n
    // Add number of holes to "holes" variable if number has hole(s)
    
    let holes = 0;
    
    const nToStr = String(n);
    
    for (let i = 0; i < nToStr.length; i++) {
      if (nToStr[i] === '0' || nToStr[i] === '6' || nToStr[i] === '9') {
        holes += 1;
      } else if (nToStr[i] === '8') {
        holes += 2;
      }
    }
    
    return holes;
};