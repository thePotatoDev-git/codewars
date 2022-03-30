function getCount(str) {
    const splitStr = str.split('');
     const vowelCount = splitStr.filter(element => element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u');
     return vowelCount.length;
   }