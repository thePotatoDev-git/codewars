function createPhoneNumber(numbers){
    let areaCode = numbers.slice(0, 3).join('');
    let firstThree = numbers.slice(3, 6).join('');
    let lastFour = numbers.slice(6).join('');
    
    return `(${areaCode}) ${firstThree}-${lastFour}`
  }