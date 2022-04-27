String.prototype.toAlternatingCase = function () {
  let str = this.split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase())
  return str.join('');
}