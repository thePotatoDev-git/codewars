function vowelIndices(word){
    word = word.toLowerCase();
    const indexes = [];
    const arr = word.split('');
    arr.forEach((letter, i) => {
        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' || letter == 'y') {
            indexes.push(i + 1);
        }
    })
    return indexes
  }