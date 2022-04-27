function toFreud(string) {
    return string.split(' ').map(word => {
        return word.length > 0 ? 'sex' : word
    }).join(' ');
  }