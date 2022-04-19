function squareOrSquareRoot(array) {
    const newArr = [];
     array.forEach(num => {
      if (Math.sqrt(num) === Math.floor(Math.sqrt(num))) {
        newArr.push(Math.sqrt(num));
      } else {
        newArr.push(num * num)
      }
    })  
    return newArr;
  }