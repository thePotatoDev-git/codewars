function pigIt(str) {
    str = str.split(' ');
    const pLatin = str.map(el => {
        if (el === '!' || el === '.' || el === '?') {
            return el;
        } else {
            return el.substring(1) + el.charAt(0) + 'ay';
        }
    })
    return pLatin.join(' ');
}