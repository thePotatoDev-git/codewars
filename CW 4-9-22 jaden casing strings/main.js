String.prototype.toJadenCase = function () {
    let str = this.split(' ');
    const jadened = str.map(word => word.charAt(0).toUpperCase() + word.substr(1));
    return jadened.join(' ');
  };