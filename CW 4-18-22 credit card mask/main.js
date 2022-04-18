function maskify(cc) {
    const masked = [];
    cc = cc.split('');
    cc.forEach((digit, i) => {
      if (i < (cc.length - 4)) {
        masked.push('#');
      } else {
        masked.push(digit);
      }
    })
   
    return masked.join('');
  }
  