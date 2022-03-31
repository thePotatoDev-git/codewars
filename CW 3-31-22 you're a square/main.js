var isSquare = function(n){
    let square = Math.sqrt(n);
    if (square === Number(square.toFixed(0))) {
      return true;
    } else {
      return false;
    }
  }